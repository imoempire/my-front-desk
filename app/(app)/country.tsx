import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { allCountries } from "@/constants/Countries";
import { BackButton } from "@/components/Buttons";
import { ScreenHeight } from "@/constants/Styles";
import { DynamicTitleLabel } from "@/components/Label";
import { Colors } from "@/constants/Colors";
import { CountryItem } from "@/components/Card";
import { Ionicons } from "@expo/vector-icons";
import { useRecentCountryCodes } from "@/hooks/useDatabaseHook";
import { router } from "expo-router";

interface Country {
  flag: string;
  dial_code: string;
  name: string;
}

const Modal = () => {
  const [allCountry, setAllCountry] = useState<Country[]>([]);
  const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { updateCountryCode, refresh } = useRecentCountryCodes();

  useEffect(() => {
    setIsLoading(true);
    if (searchTerm === "") {
      setFilteredCountry(allCountry);
      setIsLoading(false);
    } else {
      const filtered = allCountry.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountry(filtered);
      setIsLoading(false);
    }
  }, [searchTerm, allCountry]);

  useEffect(() => {
    setIsLoading(true);
    const restructure = allCountries.map((item) => ({
      dial_code: item.dial_code,
      flag: item.flag,
      name: item.name,
    }));
    setAllCountry(restructure);
    setIsLoading(false);
  }, []);

  const onSelection = (code: string) => {
    updateCountryCode(code).then(() => {
      router.back();
    });
  };

  const renderLoader = () =>
    isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderFooter = () => <View style={styles.footer} />;
  return (
    <ThemedView style={{ gap: 30, paddingHorizontal: 20 }}>
      <View
        style={{
          minHeight: ScreenHeight / 15,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <BackButton />
        <View
          style={{
            width: 400,
            height: 50,
            borderRadius: 10,
            backgroundColor: Colors.grayBackground,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <Ionicons
            style={{ marginRight: 5 }}
            name="search-sharp"
            size={24}
            color={Colors.grayIcon}
          />
          <TextInput
            style={{
              color: Colors.grayIcon,
              backgroundColor: Colors.grayBackground,
            }}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            keyboardType="default"
            placeholder="Type the name of your country here"
          />
        </View>
      </View>
      <View style={{ flex: 1, gap: 20 }}>
        <DynamicTitleLabel
          size={30}
          title="Select your country code"
          subtitle=""
        />
        <FlatList
          data={filteredCountry}
          numColumns={6}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <CountryItem key={index} item={item} onSelection={onSelection} />
          )}
          ListFooterComponent={() => (
            <>
              {renderLoader()}
              {renderFooter()}
            </>
          )}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.5}
          style={styles.flatList}
        />
      </View>
    </ThemedView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  listContainer: {
    gap: 20,
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  footer: {
    height: 100,
    backgroundColor: "#ffffff",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
  flatList: {
    flexGrow: 1,
  },
});
