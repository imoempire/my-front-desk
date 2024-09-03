import { Colors } from "@/constants/Colors";
import {
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { AppPhoneInputProps } from "@/constants/ComponentsProps";
import { useRecentCountryCodes } from "@/hooks/useDatabaseHook";
import { withObservables } from "@nozbe/watermelondb/react";
import { CountryCodeCollection } from "@/DB";
import { removeFirstLeadingZero } from "@/hooks/useTextFormat";

const AppPhoneInput = ({
  error = "",
  isError = false,
  onChange,
  width,
  selected,
  code,
}: AppPhoneInputProps) => {
  const handleModal = () => {
    router.push("/(app)/country");
  };

  return (
    <View style={[{ width: width }]}>
      <ThemedText
        style={{
          fontFamily: "Medium",
          fontSize: 16,
          color: Colors.primaryText,
        }}
      >
        Phone number :
      </ThemedText>
      {isError && error !== "" && (
        <ThemedText
          style={{
            fontFamily: "Regular",
            fontSize: 11,
            color: Colors.errorText,
            lineHeight: 15,
            alignItems: "flex-start",
          }}
        >
          {isError && error}
        </ThemedText>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors.grayBackground,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.primary,
            width: "17%",
            height: 45,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={handleModal}
            style={{
              backgroundColor: Colors.primary,
              height: 45,
              borderRadius: 10,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            {false ? (
              <ActivityIndicator size={"small"} />
            ) : (
              <ThemedText
                style={{
                  fontSize: 16,
                  fontFamily: "Medium",
                  color: Colors.whiteText,
                  textAlign: "center",
                }}
              >
                {code?.[0]?.code || +233}
              </ThemedText>
            )}
            <MaterialIcons
              name="expand-more"
              size={24}
              color={Colors.whiteBackground}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "77%",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderRadius: 10,
              height: 45,
              marginLeft: 10,
              paddingHorizontal: 10,
              fontSize: 25,
            }}
            placeholder={`${removeFirstLeadingZero("0503958560")}`}
            keyboardType="number-pad"
            selectionColor={Colors.primary}
            onChangeText={(value: string) => onChange?.(value)}
          />
        </View>
        <View style={{ alignItems: "center", marginLeft: "auto" }}>
          {isError && error !== "" && (
            <Feather name="alert-circle" size={24} color={Colors.errorText} />
          )}
        </View>
      </View>
    </View>
  );
};

const enhance = withObservables(["country_codes"], ({}) => ({
  code: CountryCodeCollection.query().observeWithColumns(["code"]),
}));

const EnhancedCodeButton = enhance(AppPhoneInput);
export default EnhancedCodeButton;
