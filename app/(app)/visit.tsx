import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { homecard } from "@/constants/ComponentsProps";
import { Colors } from "@/constants/Colors";
import { VisitCard } from "@/components/Card";
import { HelpButton } from "@/components/others";
import { TitleLabel } from "@/components/Label";
import { CancelButton } from "@/components/Buttons";
import { router } from "expo-router";

let Cards: { [key: number]: homecard } = {
  0: {
    buttonColor: Colors.darkBlue,
    title: `Official visit`,
    icon: "login",
    route: "/(app)/staffdepart",
  },
  1: {
    buttonColor: Colors.blue,
    title: `Personal visit`,
    icon: "person",
    route: "/(app)/staffdepart",
  },
};

const Visit = () => {
  const itemCount = 2;
  const items = Array.from({ length: itemCount }, (_, index) => Cards[index]);

  const handleCancel = () => {
    router.push("/(app)/");
  };

  return (
    <ThemedView style={{ gap: 30, paddingHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <View>
          <TitleLabel title="Hello" subtitle="What brings you here today?" />
        </View>
        <View>
          <HelpButton screen={"/(app)/modal"} />
        </View>
      </View>
      <View
        style={{
          flex: 1.2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {items?.map((item, index) => {
          return <VisitCard item={item} key={index} />;
        })}
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          paddingVertical: 20,
        }}
      >
        <CancelButton onPress={handleCancel} />
      </View>
    </ThemedView>
  );
};

export default Visit;

const styles = StyleSheet.create({});
