import { Dish } from "../models/Dish";

export const DISHES: Dish[] = [
  // Italiano
  { id: 1, categoryId: 1, name: "Lasagna", description: "Piatto al forno tradizionale.", image: "https://picsum.photos/200?food1" },
  { id: 2, categoryId: 1, name: "Tiramisu", description: "Dessert al caffè e mascarpone.", image: "https://picsum.photos/200?food2" },
  { id: 3, categoryId: 1, name: "Spaghetti Carbonara", description: "Pasta con uova, guanciale e pecorino.", image: "https://picsum.photos/200?food3" },
  { id: 4, categoryId: 1, name: "Pizza Margherita", description: "Classica pizza napoletana.", image: "https://picsum.photos/200?food4" },

  // Inglese
  { id: 5, categoryId: 2, name: "Fish & Chips", description: "Pesce fritto con patatine.", image: "https://picsum.photos/200?food5" },
  { id: 6, categoryId: 2, name: "English Breakfast", description: "Colazione inglese completa.", image: "https://picsum.photos/200?food6" },
  { id: 7, categoryId: 2, name: "Shepherd's Pie", description: "Torta salata di carne e purè.", image: "https://picsum.photos/200?food7" },

  // Francese
  { id: 8, categoryId: 3, name: "Croissant", description: "Dolce da colazione.", image: "https://picsum.photos/200?food8" },
  { id: 9, categoryId: 3, name: "Ratatouille", description: "Verdure provenzali.", image: "https://picsum.photos/200?food9" },
  { id: 10, categoryId: 3, name: "Quiche Lorraine", description: "Torta salata francese.", image: "https://picsum.photos/200?food10" },

  // Spagnolo
  { id: 11, categoryId: 4, name: "Paella", description: "Riso spagnolo tradizionale.", image: "https://picsum.photos/200?food11" },
  { id: 12, categoryId: 4, name: "Tapas", description: "Piccoli piatti tipici.", image: "https://picsum.photos/200?food12" },
  { id: 13, categoryId: 4, name: "Churros", description: "Dolce fritto con zucchero.", image: "https://picsum.photos/200?food13" },

  // Giapponese
  { id: 14, categoryId: 5, name: "Sushi", description: "Riso e pesce crudo.", image: "https://picsum.photos/200?food14" },
  { id: 15, categoryId: 5, name: "Ramen", description: "Zuppa di noodles.", image: "https://picsum.photos/200?food15" },

  // Messicana
  { id: 16, categoryId: 6, name: "Tacos", description: "Tortilla ripiena.", image: "https://picsum.photos/200?food16" },
  { id: 17, categoryId: 6, name: "Guacamole", description: "Salsa di avocado.", image: "https://picsum.photos/200?food17" },

  // Indiana
  { id: 18, categoryId: 7, name: "Chicken Tikka Masala", description: "Pollo speziato con salsa.", image: "https://picsum.photos/200?food18" },
  { id: 19, categoryId: 7, name: "Naan", description: "Pane indiano cotto nel tandoor.", image: "https://picsum.photos/200?food19" },

  // Greca
  { id: 20, categoryId: 8, name: "Moussaka", description: "Piatto di melanzane e carne.", image: "https://picsum.photos/200?food20" },
  { id: 21, categoryId: 8, name: "Greek Salad", description: "Insalata con feta e olive.", image: "https://picsum.photos/200?food21" },
];

