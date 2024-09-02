import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export const PoweredBy = () => {
  return (
    <View>
      <ThemedText
        style={{
          color: "#AFAFAF",
          fontSize: 20,
        }}
      >
        powered by{" "}
        <ThemedText
          style={{ fontFamily: "SemiBold", color: "#AFAFAF", fontSize: 20 }}
        >
          Webbermill
        </ThemedText>
      </ThemedText>
    </View>
  );
};

interface Props {
  screen: string;
}

export const HelpButton = ({ screen }: Props) => {
  let color = Colors.orangeText;

  const handleNavigation = () => {
    // @ts-ignore
    router.push(screen);
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.container}>
      <MaterialIcons
        style={{ marginRight: 3 }}
        name="help"
        size={30}
        color={color}
      />
      <ThemedText
        style={{
          color: color,
          fontSize: 16,
          fontFamily: "Medium",
        }}
      >
        Need help?
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
