import { Recipe } from "../models/Recipe";

export const RECIPES: Recipe[] = [
  {
    id: 1,
    dishId: 1,
    ingredients: ["Pasta", "Ragù", "Besciamella"],
    steps: [
      "Cuoci la pasta.",
      "Prepara il ragù.",
      "Assembla e inforna."
    ],
  },

  {
    id: 2,
    dishId: 2,
    ingredients: ["Mascarpone", "Caffè", "Savoiardi"],
    steps: [
      "Prepara la crema.",
      "Inzuppa i savoiardi.",
      "Alterna strati e raffredda."
    ],
  },

  {
    id: 3,
    dishId: 3,
    ingredients: ["Merluzzo", "Patate", "Pastella"],
    steps: [
      "Prepara la pastella.",
      "Friggi il pesce.",
      "Servi con patatine."
    ],
  },
];
