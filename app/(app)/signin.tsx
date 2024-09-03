import { StyleSheet, View } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { TitleLabel } from "@/components/Label";
import { PoweredBy } from "@/components/others";
import { ActionButton, BackButton } from "@/components/Buttons";
import { ScreenHeight } from "@/constants/Styles";
import EnhancedCodeButton from "@/components/Reactive/AppInput";
import { router } from "expo-router";

export default function Page() {
  const handleSignIn = () => {
    router.push({
      pathname: "/(app)/success",
      params: {
        from: "signin",
      },
    });
  };
  return (
    <ThemedView style={{ gap: 20, paddingHorizontal: 20 }}>
      <View style={{ minHeight: ScreenHeight / 15, justifyContent: "center" }}>
        <BackButton />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <TitleLabel
          title="Welcome back!"
          subtitle="Provide your sign in information to continue"
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ gap: 30, width: "50%" }}>
          <EnhancedCodeButton onChange={() => {}} label="Email" selected={""} />
          <View style={{ alignItems: "center" }}>
            <ActionButton onPress={handleSignIn} title="Continue" />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 20,
          paddingVertical: 20,
        }}
      >
        <PoweredBy />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
