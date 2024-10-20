import { Food } from "../models/Food"
import { Item } from "../models/Item"

export function getIngredients(item: Item){
  if(item instanceof Food){
    return item.getIngredients().join(", ").length > 32 
    ? item.getIngredients().join(", ").slice(0, 32) + "..." 
    : item.getIngredients().join(", ")
  }else{
    return ""
  }
}