import { styles } from "@/styles/common";
import { Image, View } from "react-native";
export default function DishCard({ imageUrl, nameDish, description }) {
  return (
    <View style={styles.containerDishCard}>
      <View>
        <Image source={imageUrl} />
      </View>
    </View>
  );
}
