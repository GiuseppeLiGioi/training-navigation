import { styles } from "@/styles/common";
import { Image, Text, View } from "react-native";

type DishCardProps = {
  imageUrl: string;
  nameDish: string;
  description: string;
};
export default function DishCard({
  imageUrl,
  nameDish,
  description,
}: DishCardProps) {
  return (
    <View style={styles.containerDishCard}>
      <View style={styles.containerDishImage}>
        <Image source={{ uri: imageUrl }} style={styles.imageDish} />
      </View>
      <View style={styles.containerDishInfo}>
        <Text style={styles.DishInfo}>{nameDish}</Text>
        <Text style={styles.DishInfo}>{description}</Text>
      </View>
    </View>
  );
}
