import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

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

interface HelpButtonProps {
  screen: string;
}

export const HelpButton = ({ screen }: HelpButtonProps) => {
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

export const VerifiedBadge = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <LottieView
        source={require("../../assets/animations/animation_lm4s2cj1.json")}
        // autoSize
        resizeMode="cover"
        style={{ height: 200, width: 200 }}
        autoPlay
        loop
        speed={0.7}
        colorFilters={[
          {
            keypath: "Badge",
            color: "#2FC816",
          },
        ]}
      />
    </View>
  );
};

interface Props {
  seachTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchBox = ({ seachTerm = "", setSearchTerm }: Props) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={seachTerm}
        style={{
          borderWidth: 0,
          borderRadius: 10,
          height: 45,
          width: 521,
          paddingHorizontal: 10,
          backgroundColor: "#EEEBEB",
        }}
        onChangeText={(value) => setSearchTerm(value)}
        placeholder="Search who you’re looking for"
      />
    </View>
  );
};

interface SelectorProps {
  selected?: "STAFF" | "DEPARTMENT";
  onChange?: (value: "STAFF" | "DEPARTMENT") => void;
}

export const Selectors = ({ onChange, selected = "STAFF" }: SelectorProps) => {
  const handleSelection = (side: "STAFF" | "DEPARTMENT") => {
    onChange?.(side);
  };

  return (
    <View style={styles.container2}>
      <TouchableOpacity
        onPress={() => handleSelection("STAFF")}
        style={[
          styles.btn,
          {
            width: 150,
            backgroundColor: selected === "STAFF" ? Colors.primary : "#ffffff",
            borderColor: Colors.primary,
            borderWidth: 1.5,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "Medium",
            color: selected !== "STAFF" ? Colors.text_gray : "#ffffff",
          }}
        >
          Staff
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelection("DEPARTMENT")}
        style={[
          styles.btn,
          {
            width: 180,
            backgroundColor:
              selected === "DEPARTMENT" ? Colors.primary : "#ffffff",
            borderColor: Colors.primary,
            borderWidth: 1.5,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "Medium",
            color: selected !== "DEPARTMENT" ? Colors.text_gray : "#ffffff",
          }}
        >
          Department
        </Text>
      </TouchableOpacity>
    </View>
  );
};

interface EmptyLoaderProps {
  title?: string;
}

export const EmptyLoader = ({ title = "No data found" }: EmptyLoaderProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFAFA",
        padding: 10,
      }}
    >
      <LottieView
        source={require("../../assets/animations/animation_lmggehkj.json")}
        // autoSize
        resizeMode="cover"
        style={{ height: 200, width: 200 }}
        autoPlay
        loop
        speed={0.7}
      />
      <ThemedText
        style={{
          fontFamily: "Medium",
          color: Colors.text_gray,
          fontSize: 20,
          lineHeight: 30,
        }}
      >
        {title}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
