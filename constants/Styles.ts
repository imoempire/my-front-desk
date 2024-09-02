import { Dimensions, ViewStyle } from "react-native";

export const ScreenHeight = Dimensions.get("window").height;
export const ScreenWidth = Dimensions.get("window").width;

export const Capitalize = (str: string | undefined) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

export const CenterBox: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

export const CenterSpaceBox: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const CenterItemBox: ViewStyle = {
  justifyContent: "space-between",
  alignItems: "center",
};
