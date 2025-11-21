import { useNavigateContext } from "@/contexts/NavigateContext";
import { useRouter } from "expo-router";
import { FlatList, Pressable } from "react-native";
import DishCard from "./DishCard";

type Dish = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  image: string;
};

type DishesProps = {
  dishes: Dish[];
};
export default function DishesList({ dishes }: DishesProps) {
  const router = useRouter();
  const { categoryId } = useNavigateContext();
  const dishesToRender = dishes.filter((d) => d.categoryId === categoryId);
  return (
    <FlatList
      data={dishesToRender}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(itemData) => (
        <Pressable
          onPress={() => router.push("/recipes")}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <DishCard
            imageUrl={itemData.item.image}
            nameDish={itemData.item.name}
            description={itemData.item.description}
          />
        </Pressable>
      )}
    />
  );
}
