import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";

interface Props {
  title: string;
  subtitle: string;
}

interface DynamicTitleLabel extends Props {
  size: number;
}

export const TitleLabel = ({ subtitle, title }: Props) => {
  let size = 50;
  let subSize = 20;
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <ThemedText
        style={{
          fontSize: size,
          lineHeight: size + 10,
          fontFamily: "SemiBold",
          color: "#0039CB",
        }}
      >
        {title}
      </ThemedText>
      <ThemedText
        style={{
          fontSize: subSize,
          lineHeight: subSize + 10,
          fontFamily: "Regular",
          color: "#000000",
        }}
      >
        {subtitle}
      </ThemedText>
    </View>
  );
};

export const DynamicTitleLabel = ({
  subtitle,
  title,
  size,
}: DynamicTitleLabel) => {
  let subSize = 20;
  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <ThemedText
        style={{
          fontSize: size,
          lineHeight: size + 10,
          fontFamily: "SemiBold",
          color: "#0039CB",
        }}
      >
        {title}
      </ThemedText>
      {/* <ThemedText
        style={{
          fontSize: subSize,
          lineHeight: subSize + 10,
          fontFamily: "Regular",
          color: "#000000",
        }}
      >
        {subtitle}
      </ThemedText> */}
    </View>
  );
};

const styles = StyleSheet.create({});
