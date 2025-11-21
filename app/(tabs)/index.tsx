import CategoryList from "@/components/my/CategoryList";
import { CATEGORIES } from "@/data/categories";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#80f9d2ff" }}>
      <StatusBar style="dark" />
      <CategoryList categories={CATEGORIES} />
    </View>
  );
}
