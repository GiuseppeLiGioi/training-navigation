import { Category } from "@/models/Category";
import { styles } from "@/styles/common";
import { useNavigation, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  categories: Category[];
};

export default function CategoryList({ categories }: Props) {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={categories}
        style={{ flex: 1 }}
        numColumns={2}
        renderItem={(itemData) => (
          <Pressable
            android_ripple={{ color: "#727272ff" }}
            onPress={() => router.push("/dishes")}
            style={({ pressed }) => [
              styles.containerOuterCategory,
              {
                backgroundColor: pressed ? "#130f0fff" : itemData.item.color,
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
