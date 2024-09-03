import { Dimensions, View } from "react-native";
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const Space = {};

interface Props {
  size: number;
}

export const WhiteSpace = ({ size }: Props) => {
  return (
    <View
      style={{
        height: SCREEN_HEIGHT / size,
        backgroundColor: "transparent",
      }}
    />
  );
};
