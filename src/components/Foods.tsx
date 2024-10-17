import { Category } from "../models/Category"
import FoodCard from "./FoodCard"

type Props = {
  category: Category
}

export default function Foods({category}: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2">
      {category.getItems().map((item, index) => (
        <FoodCard key={index} item={item} />
      ))}
    </div>
  )
}