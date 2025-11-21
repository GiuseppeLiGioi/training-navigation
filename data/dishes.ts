import { Dish } from "../models/Dish";

export const DISHES: Dish[] = [
  // Italiano
  { id: 1, categoryId: 1, name: "Lasagna", description: "Piatto al forno tradizionale.", image: "https://picsum.photos/200?food1" },
  { id: 2, categoryId: 1, name: "Tiramisu", description: "Dessert al caffè e mascarpone.", image: "https://picsum.photos/200?food2" },

  // Inglese
  { id: 3, categoryId: 2, name: "Fish & Chips", description: "Pesce fritto con patatine.", image: "https://picsum.photos/200?food3" },
  { id: 4, categoryId: 2, name: "English Breakfast", description: "Colazione inglese completa.", image: "https://picsum.photos/200?food4" },

  // Francese
  { id: 5, categoryId: 3, name: "Croissant", description: "Classico dolce da colazione.", image: "https://picsum.photos/200?food5" },
  { id: 6, categoryId: 3, name: "Ratatouille", description: "Piatto provenzale di verdure.", image: "https://picsum.photos/200?food6" },

  // Spagnolo
  { id: 7, categoryId: 4, name: "Paella", description: "Riso tradizionale spagnolo.", image: "https://picsum.photos/200?food7" },
  { id: 8, categoryId: 4, name: "Tapas", description: "Varietà di piccoli piatti.", image: "https://picsum.photos/200?food8" },
];
