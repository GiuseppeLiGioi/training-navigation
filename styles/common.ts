import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerOuterCategory: {
    flex: 1,
    height: 200,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 0.65,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  containerInnerCategory: {
    alignItems: "center",
    justifyContent: "center",
  },
  textCategory: {
    fontSize: 18,
    textAlign: "center",
  },

  pressed: {
    backgroundColor: "#5e5d5dff",
  },

  containerDishCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 12,
    marginVertical: 12,
    alignSelf: "center",
    padding: 12,
    backgroundColor: "#77fac1ff",

    shadowColor: "black",
    shadowOpacity: 0.65,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  containerDishImage: {
    width: "90%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    margin: 6,
  },
  imageDish: { width: "100%", height: "100%", resizeMode: "cover" },
  containerDishInfo: {},
  DishInfo: { fontSize: 16, textAlign: "center" },
});
