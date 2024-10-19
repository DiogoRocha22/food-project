import { Category } from "../models/Category";
import { Food } from "../models/Food";
const illustrationUrl = "src/assets/hamburguer.jpeg";

const item1 = new Food(
  "Cheeseburger",
  15,
  true,
  ["Pão", "Hambúrguer de carne", "Queijo cheddar", "Alface", "Tomate", "Maionese"],
  "Hambúrguer clássico com queijo",
  illustrationUrl
);

const item2 = new Food(
  "Bacon Burger",
  18,
  true,
  ["Pão", "Hambúrguer de carne", "Bacon", "Queijo", "Alface", "Tomate", "Molho especial"],
  "Hambúrguer com bacon crocante",
  illustrationUrl
);

const item3 = new Food(
  "Veggie Burger",
  17,
  true,
  ["Pão integral", "Hambúrguer vegetariano", "Queijo", "Alface", "Tomate", "Cebola roxa", "Maionese vegana"],
  "Hambúrguer vegetariano delicioso",
  illustrationUrl
);

const item4 = new Food(
  "Double Burger",
  25,
  true,
  ["Pão", "Dois hambúrgueres de carne", "Queijo cheddar", "Picles", "Cebola caramelizada", "Molho especial"],
  "Hambúrguer duplo para matar a fome",
  illustrationUrl
);

const item5 = new Food(
  "Chicken Burger",
  16,
  true,
  ["Pão", "Frango empanado", "Queijo", "Alface", "Maionese", "Picles"],
  "Hambúrguer de frango empanado",
  illustrationUrl
);

export const categoryHamburguer = new Category("Hambúrguer", [item1, item2, item3, item4, item5]);
