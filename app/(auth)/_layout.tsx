import { ThemedText } from "@/components/ThemedText";
import { useSession } from "@/Provider/Auth";
import { Redirect, Slot, Stack, Tabs } from "expo-router";
import React from "react";

export default function AuthLayout() {
  const { session, isLoading } = useSession();
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (session) {
    return <Redirect href="/(app)/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
