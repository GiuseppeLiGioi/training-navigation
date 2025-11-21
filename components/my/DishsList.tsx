import { useSearchParams } from "expo-router";
import { FlatList } from "react-native";
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
  const params = useSearchParams();
  const categoryId = Number(params.categoryId);
  const dishesToRender = dishes.filter((d) => d.categoryId === categoryId);
  return (
    <FlatList
      data={dishesToRender}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(itemData) => (
        <DishCard
          imageUrl={itemData.item.image}
          nameDish={itemData.item.name}
          description={itemData.item.description}
        />
      )}
    />
  );
}
