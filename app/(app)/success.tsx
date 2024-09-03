import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Href, router, useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useIsFocused } from "@react-navigation/native";
import { VerifiedBadge } from "@/components/others";

type IconsDictionary = {
  [key: string]: {
    title: string;
    subTitle: string;
    route: Href;
  };
};

const Success = () => {
  const ITEM: any = useLocalSearchParams();
  const isForcused = useIsFocused();

  let TextToShow: IconsDictionary = {
    sgnup: {
      title: "Registration successful",
      subTitle: "",
      route: "/(app)/visit",
    },
    signin: { title: "Signed in", subTitle: "", route: "/(app)/visit" },
    signout: { title: "Good bye", subTitle: "", route: "/(app)" },
    purpose: { title: "All done", subTitle: "", route: "/(app)" },
  };

  console.log(ITEM);
  let time = Date();
  let TextToDisplay = TextToShow[ITEM?.from];

  const handleNavigation = () => {
    router.push(TextToDisplay.route);
  };

  useEffect(() => {
    if (isForcused) {
      const timeout = setTimeout(() => {
        handleNavigation();
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isForcused]);

  return (
    <ThemedView>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleNavigation}
        style={styles.container}
      >
        <VerifiedBadge />
        <ThemedText
          style={{
            fontSize: 36,
            lineHeight: 54,
            fontFamily: "SemiBold",
            color: Colors.darkBlue,
          }}
        >
          {TextToDisplay?.title || "All Done"}
        </ThemedText>

        <View style={{ flexDirection: "row" }}>
          <ThemedText
            style={{
              fontSize: 20,
              fontFamily: "Regular",
              color: Colors.text_gray,
            }}
          >
            {TextToDisplay?.subTitle || ""}
          </ThemedText>
          {ITEM?.from === "signout" && (
            <ThemedText
              style={{
                fontSize: 20,
                fontFamily: "Regular",
                color: Colors.text_gray,
              }}
            >
              {` ${time}`}
            </ThemedText>
          )}
        </View>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBackground,
    justifyContent: "center",
    alignItems: "center",
  },
});
