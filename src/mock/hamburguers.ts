import { Category } from "../models/Category";
import { Item } from "../models/Item";

const item1 = new Item("Cheeseburger", 15, true, "Hambúrguer com queijo cheddar, alface e tomate");
const item2 = new Item("Bacon Burger", 18, true, "Hambúrguer com queijo, bacon, alface e tomate");
const item3 = new Item("Veggie Burger", 17, true, "Hambúrguer vegetariano com queijo, alface, tomate e cebola");
const item4 = new Item("Double Burger", 25, true, "Hambúrguer duplo com queijo, alface, tomate e picles");
const item5 = new Item("Chicken Burger", 16, true, "Hambúrguer de frango empanado com queijo, alface e maionese");

export const categoryHamburguer = new Category("Hambúrguer", [item1, item2, item3, item4, item5]);