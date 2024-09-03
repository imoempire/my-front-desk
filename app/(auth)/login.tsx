import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { AppInput, ThemedPasswordInput } from "@/components/Inputs";
import { LoginProps } from "@/constants/FormProps";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TitleLabel } from "@/components/Label";
import { ActionButton } from "@/components/Buttons";
import { router } from "expo-router";
import { useSession } from "@/Provider/Auth";
import authServices from "@/API/Services/auth.services";
import useLoginMutation from "@/API/Services/Data/OrgUser/use-login.mutation";

const Login = () => {
  // *HOOK
  const { setSession, session } = useSession();
  const LOGIN = useLoginMutation();
  // console.log(session);

  // FORMS
  const { control, handleSubmit } = useForm<LoginProps>();

  const handleOrgSignIn: SubmitHandler<LoginProps> = (data) => {
    let variables = {
      email: data?.email.trim(),
      password: data?.password.trim(),
    };
    LOGIN.mutate(
      { variables },
      {
        onSuccess: (res) => {
          let DATA = res?.data;
          let result = DATA?.data;
          let TOKENS = result?.tokens;
          let accessToken = TOKENS?.access_token;
          let refreshToken = TOKENS?.refresh_token;
          authServices.setToken(accessToken);
          authServices.refreshToken(refreshToken);

          const { tokens, ...userWithoutTokens } = result;

          console.log(userWithoutTokens);

          setSession(JSON.stringify(userWithoutTokens));
          // router.push("/(app)");
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const handleOrgSignIn2: SubmitHandler<LoginProps> = (data) => {
    let userWithoutTokens = {
      IsPhoneNumber: "0240450201",
      email: "webprofesional16@gmail.com",
      fullname: "Saviour Yao Dorvlo",
      id: 53,
      organizationId: "5977923d-2631-421b-afb2-ae598603e00f",
      roleName: "Admin",
      userId: "53b58376-b9ab-4001-a149-eda108e9b991",
    };
    setSession(JSON.stringify(userWithoutTokens));
  };

  useEffect(() => {
    // Define an async function
    const fetchToken = async () => {
      try {
        const token = await authServices.getToken();
        // console.log(token, "tokens");
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    // Call the async function
    fetchToken();
  }, []);

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
            <Controller
              name={"email"}
              control={control}
              rules={{
                required: "Organization Email is required!",
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <AppInput
                    label="Email"
                    onChange={onChange}
                    value={value}
                    isError={!!error}
                    error={error}
                    capitalize="none"
                  />
                );
              }}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <ThemedPasswordInput
                    label="Password"
                    onChange={onChange}
                    value={value}
                    isError={!!error}
                    error={error}
                  />
                );
              }}
            />
            <View style={{ alignItems: "center" }}>
              <ActionButton
                onPress={handleSubmit(handleOrgSignIn)}
                title="Continue"
                load={LOGIN.isPending}
              />
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
