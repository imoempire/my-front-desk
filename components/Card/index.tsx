import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { homecard, VisitCardProps } from "@/constants/ComponentsProps";
import { router } from "expo-router";
import React from "react";
import Animated, { SlideInDown } from "react-native-reanimated";
import { generateColor, getInitials } from "@/hooks/useTextFormat";
import { Image } from "expo-image";
import { StaffAttributes } from "@/DB/models/Staff";
import { DapartmentAttributes } from "@/DB/models/Departments";
import { BASE_ENDPOINT } from "@/API/API/endpoints";

interface HomeCardProps {
  item: homecard;
}

interface VisitCardProp {
  item: VisitCardProps;
}

const size = 142.5;

export const HomeCard = ({
  item: { buttonColor, title = "Title", icon = "login", type = "sign", route },
}: HomeCardProps) => {
  const handleNavigation = () => {
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

export const VisitCard = ({
  item: {
    buttonColor,
    title = "Title",
    icon = "login",
    type = "sign",
    route = "",
  },
}: VisitCardProp) => {
  const handleNavigation = () => {
    // @ts-ignore
    router.push(route);
  };
  return (
    <View style={styles2.MainContainer}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={[styles2.container, { backgroundColor: buttonColor }]}
      >
        <View style={styles2.IconText}>
          <View style={styles2.Icon}>
            <MaterialIcons name={icon} size={30} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: 200 }}>
        <ThemedText
          style={{
            fontFamily: "Regular",
            fontSize: 18,
            color: Colors.text_gray,
            textAlign: "center",
          }}
        >
          {title}
        </ThemedText>
      </View>
    </View>
  );
};

interface Props {
  item: any;
  onSelection: (item: any) => void;
}

export const CountryItem = React.memo(({ item, onSelection }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onSelection(item.dial_code)}
      style={styles.item}
    >
      <ThemedText style={styles.flag}>{item.flag}</ThemedText>
      <ThemedText style={styles.dialCode}>{item.dial_code}</ThemedText>
      <ThemedText style={styles.countryName}>{item.name}</ThemedText>
    </TouchableOpacity>
  );
});

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
  item: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5,
    padding: 10,
  },
  flag: {
    fontSize: 100,
    lineHeight: 120,
  },
  dialCode: {
    fontFamily: "Medium",
    fontSize: 20,
    color: Colors.darkBlue,
  },
  countryName: {
    fontSize: 16,
    fontFamily: "Regular",
    textAlign: "center",
    width: 150,
  },
});

const styles2 = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9BF",
    // borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    // width: "100%",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
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
  Btns: {
    width: 142,
    height: 142,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

// STAFF
interface StaffCardProps {
  item: StaffAttributes;
  side?: "STAFF" | "DEPARTMENT";
}

export const StaffCard = ({ item }: StaffCardProps) => {
  const handleNavigation = () => {
    router.push({
      pathname: "/(app)/final",
      params: { ...item, selected: "staff" },
    });
  };

  let photo = `${item?.profilePhoto}`;
  let photoUri = BASE_ENDPOINT + `/${photo}`;
  let photos = `https://receptionapi.webbermill.com/` + `/${photo}`;

  return (
    <Animated.View
      entering={SlideInDown.duration(400)}
      style={StaffStyles.StaffCardcontainer}
    >
      <TouchableOpacity
        style={StaffStyles.StaffCardcontainerBtns}
        onPress={handleNavigation}
      >
        {item?.profilePhoto !== null && item?.profilePhoto !== "" ? (
          <Image
            source={{ uri: photo }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            cachePolicy={"memory-disk"}
          />
        ) : (
          <ThemedText
            style={{
              fontSize: 50,
              fontFamily: "SemiBold",
              textAlign: "center",
              alignItems: "center",
              lineHeight: 80,
              width: "100%",
            }}
          >
            {getInitials(item?.fullName)}
          </ThemedText>
        )}
      </TouchableOpacity>
      <View style={{ gap: 5 }}>
        <ThemedText
          style={{
            fontFamily: "SemiBold",
            fontSize: 20,
            lineHeight: 30,
            textAlign: "center",
            color: Colors.lightBlue,
          }}
        >
          {item?.fullName}
        </ThemedText>
        <ThemedText
          style={{
            lineHeight: 24,
            fontFamily: "Medium",
            fontSize: 16,
            textAlign: "center",
            color: Colors.primaryText,
          }}
        >
          {item?.role}
        </ThemedText>
      </View>
    </Animated.View>
  );
};
const StaffStyles = StyleSheet.create({
  StaffCardcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  StaffCardcontainerBtns: {
    width: 142,
    height: 142,
    backgroundColor: Colors.greyBackground,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

// DEPARTMENT
interface DepartmentProps {
  item: DapartmentAttributes;
  side?: "STAFF" | "DEPARTMENT";
}

export const DepartmentCard = ({ item, side = "STAFF" }: DepartmentProps) => {
  const handleNavigation = () => {
    router.push({
      pathname: "/(app)/final",
      params: { ...item, selected: "staff" },
    });
  };

  return (
    <Animated.View
      entering={SlideInDown.duration(400)}
      style={DepartmentStyles.container}
    >
      <TouchableOpacity
        style={[
          DepartmentStyles.Btns,
          { backgroundColor: generateColor(item.departmentId) },
        ]}
        onPress={handleNavigation}
      >
        <MaterialIcons
          name="account-balance"
          size={70}
          color={Colors.whiteBackground}
        />
      </TouchableOpacity>
      <ThemedText
        style={{
          lineHeight: 30,
          fontFamily: "Medium",
          fontSize: 20,
          textAlign: "center",
          color: Colors.lightBlue,
        }}
      >
        {item?.departmentName}
      </ThemedText>
      <ThemedText
        style={{
          lineHeight: 24,
          fontFamily: "Regular",
          fontSize: 16,
          textAlign: "center",
          color: Colors.primaryText,
        }}
      >
        {`Room ${item?.departmentRoomNum}`}
      </ThemedText>
    </Animated.View>
  );
};

const DepartmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  Btns: {
    width: 142,
    height: 142,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
