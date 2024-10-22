import { Extra } from "../models/Extra";
import { Category } from "../models/Category";
import { Food } from "../models/Food";
const illustrationUrl = "/src/assets/hamburguer.jpeg";

const adicionaisHamburguer: Extra [] = [
  { name: "Ovo", price: 2.00 },
  { name: "Bacon", price: 3.00 },
  { name: "Queijo", price: 1.00 },
  { name: "Alface", price: 1.00 },
  { name: "Tomate", price: 1.00 }
];

const item1 = new Food(
  1, // ID
  "Cheeseburger",
  15,
  true,
  ["Pão", "Hambúrguer de carne", "Queijo cheddar", "Alface", "Tomate", "Maionese"],
  illustrationUrl
);

const item2 = new Food(
  2, // ID
  "Bacon Burger",
  18,
  true,
  ["Pão", "Hambúrguer de carne", "Bacon", "Queijo", "Alface", "Tomate", "Molho especial"],
  illustrationUrl
);

const item3 = new Food(
  3, // ID
  "Veggie Burger",
  17,
  true,
  ["Pão integral", "Hambúrguer vegetariano", "Queijo", "Alface", "Tomate", "Cebola roxa", "Maionese vegana"],
  illustrationUrl
);

const item4 = new Food(
  4, // ID
  "Double Burger",
  25,
  true,
  ["Pão", "Dois hambúrgueres de carne", "Queijo cheddar", "Picles", "Cebola caramelizada", "Molho especial"],
  illustrationUrl
);

const item5 = new Food(
  5, // ID
  "Chicken Burger",
  16,
  true,
  ["Pão", "Frango empanado", "Queijo", "Alface", "Maionese", "Picles"],
  illustrationUrl
);

export const categoryHamburguer = new Category("Hambúrguer", [item1, item2, item3, item4, item5], adicionaisHamburguer);
