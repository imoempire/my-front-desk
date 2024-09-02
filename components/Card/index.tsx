import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { homecard } from "@/constants/ComponentsProps";
import { router } from "expo-router";

interface HomeCardProps {
  item: homecard;
}

const size = 142.5;

export const HomeCard = ({
  item: {
    buttonColor,
    title = "Title",
    icon = "login",
    type = "sign",
    route = "",
  },
}: HomeCardProps) => {
  const handleNavigation = () => {
    // @ts-ignore
    router.push(route);
  };

  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={[styles.container, { backgroundColor: buttonColor }]}
      >
        <View style={styles.IconText}>
          <View style={styles.Icon}>
            <MaterialIcons name={icon} size={30} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: 200 }}>
        <ThemedText
          style={{ fontSize: 18, fontFamily: "Regular", textAlign: "center" }}
        >
          {title}
        </ThemedText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9BF",
    padding: 10,
    borderRadius: 25,
    // shadowColor: '#00000040',
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // elevation: .5,
  },
  container: {
    height: size,
    width: size,
    marginVertical: 20,
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  IconText: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  Icon: {
    borderWidth: 2,
    borderColor: Colors.whiteBackground,
    width: 60.09,
    height: 60.09,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  Arrow: {
    width: 34.34,
    height: 34.34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    backgroundColor: Colors.whiteBackground,
  },
});
