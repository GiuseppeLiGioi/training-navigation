import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="dishes" options={{ title: "Dishes" }} />
      <Stack.Screen name="recipes" options={{ title: "Recipes" }} />
    </Stack>
  );
}
