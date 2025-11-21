import CategoryList from "@/components/my/CategoryList";
import { CATEGORIES } from "@/data/categories";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#80f9d2ff" }}>
      <CategoryList categories={CATEGORIES} />
    </View>
  );
}
