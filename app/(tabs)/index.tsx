import CategoryList from "@/components/my/CategoryList";
import { CATEGORIES } from "@/data/categories";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#80f9d2ff" }}>
      <StatusBar style="dark" />
      <CategoryList categories={CATEGORIES} />
    </SafeAreaView>
  );
}
