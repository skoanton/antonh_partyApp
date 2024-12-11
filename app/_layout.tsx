import React from "react";
import { Slot, Stack } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
type MainLayout = {};

export default function MainLayout({}: MainLayout) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, headerTitle: "", title: "" }}
          />
          <Stack.Screen
            name="never-have-i-ever/index"
            options={{
              headerShown: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="ring-of-fire/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="cards/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="tournament/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="tournament/overview/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="tournament/teams/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
          <Stack.Screen
            name="tournament/matches/index"
            options={{ headerShown: true, headerTitle: "" }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
