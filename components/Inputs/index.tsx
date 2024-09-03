import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AppInputProps } from "@/constants/ComponentsProps";
import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { CenterBox } from "@/constants/Styles";

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
      {isError && (
        <ThemedText
          style={{
            fontFamily: "Regular",
            fontSize: 11,
            color: Colors.errorText,
            lineHeight: 15,
            alignItems: "flex-start",
          }}
        >
          {error?.message}
        </ThemedText>
      )}
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
