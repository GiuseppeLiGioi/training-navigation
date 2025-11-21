import DishesList from "@/components/my/DishsList";
import { DISHES } from "@/data/dishes";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Dishes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f957d8ff" }}>
      <DishesList dishes={DISHES} />
    </SafeAreaView>
  );
}
