import { Category } from "@/models/Category";
import { styles } from "@/styles/common";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  categories: Category[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={categories}
        style={{ flex: 1 }}
        numColumns={2}
        renderItem={(itemData) => (
          <Pressable
            android_ripple={{ color: "#727272ff" }}
            style={({ pressed }) => [
              styles.containerOuterCategory,
              {
                backgroundColor: pressed ? "#acacacff" : itemData.item.color,
              },
            ]}
          >
            <View style={styles.containerInnerCategory}>
              <Text style={styles.textCategory}>{itemData.item.title}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
