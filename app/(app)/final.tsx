import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { blurhash, ScreenHeight } from "@/constants/Styles";
import { ActionButton, BackButton } from "@/components/Buttons";
import { TitleLabel } from "@/components/Label";
import { PoweredBy } from "@/components/others";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { capitalizeFirstLetter, getInitials } from "@/hooks/useTextFormat";
import { Image } from "expo-image";
import { BASE_ENDPOINT } from "@/API/API/endpoints";
import { router, useLocalSearchParams } from "expo-router";
import dayjs from "dayjs";

interface Prop {
  name?: string;
  detail?: string | number;
  section?: "Host" | "Visitor";
}

const InfoLine = ({ name = "", detail = "", section = "Host" }: Prop) => {
  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "center" },
        section === "Host" ? { marginVertical: 2 } : { marginVertical: 13 },
      ]}
    >
      <View
        style={{
          width: section === "Host" ? "40%" : "50%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <ThemedText
          style={{
            fontFamily: "Medium",
            fontSize: 16,
            color: Colors.primaryText,
            lineHeight: 24,
          }}
        >
          {name}
        </ThemedText>
      </View>
      <View
        style={{
          width: "50%",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: 10,
        }}
      >
        <ThemedText
          style={{
            fontFamily: "Regular",
            fontSize: 16,
            color: Colors.primaryText,
            lineHeight: 25,
          }}
        >
          {detail}
        </ThemedText>
      </View>
    </View>
  );
};

const avatarSize = ScreenHeight * 0.18;

const Avatar = ({ photo, fullName }: { photo?: string; fullName: string }) => {
  let photoUri = BASE_ENDPOINT + `/${photo}`;
  let photos = `http://192.168.100.187:3000` + `/${photo}`;
  return (
    <View style={{ gap: 10, alignItems: "center", justifyContent: "center" }}>
      {photo !== "" && photo !== null ? (
        <Image
          source={{ uri: photos }}
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: 100,
          }}
          placeholder={blurhash}
          cachePolicy={"memory-disk"}
        />
      ) : (
        <View
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: 100,
            backgroundColor: Colors.greyBackground,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "SemiBold",
              textAlign: "center",
            }}
          >
            {getInitials(fullName)}
          </Text>
        </View>
      )}
      <View>
        <ThemedText
          style={{
            fontFamily: "Medium",
            fontSize: 16,
            color: Colors.primaryText,
            lineHeight: 25,
          }}
        >
          Host information
        </ThemedText>
      </View>
    </View>
  );
};

const FinalStep = () => {
  const staff: any = useLocalSearchParams();

  let currentVisitor = {
    signInDate: new Date(),
    firstName: "John",
    lastname: "Smith",
    gender: "Male",
    purpose: "Male",
  };

  let purpose = "Personal";

  const signInDate = dayjs(currentVisitor?.signInDate).format(
    "ddd DD MMM YYYY"
  );
  const signInTime = dayjs().format("hh:mm a");

  const handleDone = () => {
    router.push({ pathname: "/(app)/success", params: { from: "purpose" } });
  };

  return (
    <ThemedView style={{ gap: 30, paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: ScreenHeight / 15,
        }}
      >
        <BackButton />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          minHeight: ScreenHeight / 15,
        }}
      >
        <TitleLabel
          title="Final steps"
          subtitle="Please confirm the information below to proceed"
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: 100,
        }}
      >
        <Animated.View
          entering={SlideInLeft.duration(1000)}
          style={[
            styles.Card,
            {
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {staff?.selected === "department" ? (
                <TouchableOpacity
                  style={[styles.Btns, { backgroundColor: staff?.color }]}
                >
                  <MaterialIcons
                    name="account-balance"
                    size={70}
                    color={Colors.whiteBackground}
                  />
                </TouchableOpacity>
              ) : (
                <Avatar
                  photo={staff?.profilePhoto}
                  fullName={staff?.fullName}
                />
              )}
            </View>
            <View style={{ flex: 1, marginTop: 10 }}>
              {staff?.selected === "staff" ? (
                <View
                  style={{
                    flex: 0.9,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InfoLine
                    name="Name:"
                    detail={staff?.fullName}
                    section="Host"
                  />
                  <InfoLine name="Role:" detail={staff?.role} />
                  <InfoLine
                    name="Organisation :"
                    detail={staff?.organizationName}
                  />
                  <InfoLine
                    name="Department :"
                    detail={staff?.departmentName}
                    section="Host"
                  />
                </View>
              ) : (
                <>
                  <View style={{ flex: 1 }}>
                    <InfoLine
                      name="Name:"
                      detail={staff?.departmentName}
                      section="Host"
                    />
                    <InfoLine name="Room:" detail={staff?.departmentRoomNum} />
                  </View>
                </>
              )}
            </View>
          </View>
        </Animated.View>
        <Animated.View
          entering={SlideInRight.duration(1000)}
          style={styles.Card}
        >
          <View style={{ alignItems: "center" }}>
            <ThemedText
              style={{
                fontFamily: "Medium",
                fontSize: 20,
                color: Colors.primaryText,
                lineHeight: 25,
              }}
            >
              Your information
            </ThemedText>

            <InfoLine
              name="Name:"
              detail={`${currentVisitor?.firstName} ${currentVisitor?.lastname}`}
              section="Visitor"
            />
            <InfoLine
              name="Gender:"
              detail={capitalizeFirstLetter(currentVisitor?.gender)}
              section="Visitor"
            />
            <InfoLine
              name="Purpose of visit :"
              detail={capitalizeFirstLetter(purpose)}
              section="Visitor"
            />
            <InfoLine
              name="Sign in date :"
              detail={signInDate}
              section="Visitor"
            />
            <InfoLine
              name="Sign in time :"
              detail={signInTime}
              section="Visitor"
            />
          </View>
        </Animated.View>
      </View>
      <View
        style={{
          flex: 0.25,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 20,
          paddingVertical: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <ActionButton onPress={() => handleDone()} title="Continue" />
        </View>
        <PoweredBy />
      </View>
    </ThemedView>
  );
};

export default FinalStep;

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FCFAFA",
    borderRadius: 15,
    width: 450,
    height: "100%",
    elevation: 2,
    alignItems: "center",
    marginHorizontal: 10,
  },
  Btns: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
