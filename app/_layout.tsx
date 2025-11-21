import { NavigateProvider } from "@/contexts/NavigateContext";
import { Stack } from "expo-router";
export default function StackLayout() {
  return (
    <NavigateProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </NavigateProvider>
  );
}
