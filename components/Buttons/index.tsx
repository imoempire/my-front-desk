import { Colors } from "@/constants/Colors";
import { ButtonActionProps } from "@/constants/ComponentsProps";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

export const ActionButton = ({
  title = "Title",
  onPress = () => {},
  solid = true,
  background = Colors.primaryBlue,
  type = "Continue",
  load = false,
}: ButtonActionProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: solid ? background : "white" },
      ]}
    >
      <ThemedText
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: "Medium",
          color: Colors.whiteText,
        }}
      >
        {title}
      </ThemedText>
      {type === "Continue" ? (
        <>
          {load ? (
            <ActivityIndicator size="small" color={Colors.whiteText} />
          ) : (
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color={Colors.whiteBackground}
            />
          )}
        </>
      ) : (
        <>
          {load ? (
            <ActivityIndicator size="small" color={Colors.whiteText} />
          ) : (
            <MaterialIcons
              name="done"
              size={24}
              color={Colors.whiteBackground}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export const BackButton = () => {
  const handleGoHome = () => {
    router.back();
  };

  return (
    <TouchableOpacity
      onPress={handleGoHome}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MaterialIcons name="arrow-back-ios" size={24} color={Colors.primary} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ThemedText
          style={{
            fontFamily: "Regular",
            color: Colors.primary,
            fontSize: 14,
          }}
        >
          Go back
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    minWidth: 178,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});
