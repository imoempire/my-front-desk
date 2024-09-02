import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { AppInput, ThemedPasswordInput } from "@/components/Inputs";
import { LoginProps } from "@/constants/FormProps";
import { SubmitHandler } from "react-hook-form";
import TitleLabel from "@/components/Label";
import { ActionButton } from "@/components/Buttons";
import { router } from "expo-router";
import { useSession } from "@/Provider/Auth";

const Login = () => {
  const { setSession } = useSession();

  const itemCount = 27;
  const items = Array.from({ length: itemCount }, (_, index) => ({
    id: (index + 1).toString(),
    text: `Item ${index + 1}`,
  }));

  // const renderItem = ({ item }: { item: { id: string; text: string } }) => (
  //   <View style={styles.itemContainer}>
  //     <Text style={styles.itemText}>{item.text}</Text>
  //   </View>
  // );

  // const handleOrgSignIn: SubmitHandler<LoginProps> = (data) => {};
  const handleOrgSignIn = () => {
    setSession("John Doe");
    router.push("/(app)");
  };

  return (
    <ThemedView>
      <KeyboardAvoidingView
        style={{ flexDirection: "row" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View
          style={{
            flex: 1,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <View>
            <TitleLabel
              title="Organization sign in"
              subtitle="Fill in your first and last names"
            />
          </View>
          <View style={{ gap: 30, width: "70%" }}>
            <AppInput onChange={() => {}} label="Email" />
            <ThemedPasswordInput onChange={() => {}} label="Password" />
            <View style={{ alignItems: "center" }}>
              <ActionButton onPress={handleOrgSignIn} title="Continue" />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "#02298C",
            margin: 10,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <ThemedText style={styles.nameText}>Front desk</ThemedText>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  nameText: {
    color: "white",
    fontSize: 50,
    lineHeight: 52,
    width: "100%",
    textAlign: "center",
  },
});

{
  /* <KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : undefined}
style={{ flex: 1 }}
>
<View style={{ flex: 1 }}>
  <FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
</View>
<View style={{ flex: 0.2, backgroundColor: "pink" }}>
  <TextInput
    style={{
      borderWidth: 2,
      borderColor: "red",
      height: 40,
    }}
    placeholder="Testing"
  />
</View>
</KeyboardAvoidingView> */
}
