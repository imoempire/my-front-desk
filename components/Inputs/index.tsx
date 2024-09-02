import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AppInputProps, AppPhoneInputProps } from "@/constants/ComponentsProps";
import { Colors } from "@/constants/Colors";
import { Entypo, EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { CenterBox } from "@/constants/Styles";
import { removeFirstLeadingZero } from "@/hooks/useTextFormat";

export const AppInput = ({
  error,
  isError = false,
  onChange,
  label,
  width,
  keyType,
  value,
  capitalize,
}: AppInputProps) => {
  return (
    <View style={{ gap: 5, width: "100%" }}>
      {label && (
        <ThemedText style={{ fontFamily: "Medium" }}>{label} :</ThemedText>
      )}
      <TextInput
        placeholder={`Enter ${label}`}
        value={value}
        onChangeText={(text: string) => onChange?.(text)}
        keyboardType={keyType}
        selectionColor={Colors.primary}
        autoCapitalize={capitalize}
        style={[styles.InputBox]}
      />
    </View>
  );
};

export const AppPhoneInput = ({
  error = "",
  isError = false,
  onChange,
  width,
  selected,
}: AppPhoneInputProps) => {
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
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 11,
            color: Colors.errorText,
            lineHeight: 15,
            alignItems: "flex-start",
          }}
        >
          {isError && error}
        </Text>
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
            // onPress={handleModal}
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
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Medium",
                color: Colors.whiteText,
              }}
            >
              {selected}
            </Text>
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

export const ThemedPasswordInput = ({
  onChange,
  value,
  label,
  isError = false,
  error,
  width,
}: AppInputProps) => {
  const [seePassword, setSeePassword] = useState<boolean>(true);

  const ToggleSecuredInput = () => {
    setSeePassword(!seePassword);
  };

  return (
    <View style={{ gap: 5, width: "100%" }}>
      {label && (
        <ThemedText style={{ fontFamily: "Medium" }}>{label} :</ThemedText>
      )}
      <View
        style={[
          styles.InputBox,
          {
            flexDirection: "row",
          },
          isError && {
            borderColor: "red",
          },
        ]}
      >
        <View style={{ width: "85%" }}>
          <TextInput
            style={[styles.InputBox]}
            autoCapitalize="none"
            placeholderTextColor={isError ? "red" : "#0000004D"}
            placeholder={`Enter ${label}`}
            value={value}
            secureTextEntry={seePassword}
            onChangeText={(text: string) => onChange(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => ToggleSecuredInput()}
          style={[CenterBox, { width: "15%" }]}
        >
          <Entypo
            name={seePassword ? "eye" : "eye-with-line"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {isError && (
        <ThemedText
          type="default"
          style={{
            fontSize: 10,
            color: "red",
          }}
        >
          {error?.message}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  InputBox: {
    borderRadius: 10,
    height: 55,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: Colors.grayBackground,
  },
});
