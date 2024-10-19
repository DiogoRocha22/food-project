import { Item } from '../models/Item'
import hamburguer from '../assets/hamburguer.jpeg'
import { Food } from '../models/Food'

type Props = {
  item: Item
}

export default function FoodCard({ item }: Props) {
  
  function getIngredients(){
    if(item instanceof Food){
      return item.getIngredients().join(", ").length > 32 
      ? item.getIngredients().join(", ").slice(0, 32) + "..." 
      : item.getIngredients().join(", ")
    }
  }

  return (
    <div className="flex flex-col w-48 h-full border border-slate-400 rounded-xl">
      <div className="flex-none w-40 h-40 flex items-center justify-center bg-black text-white rounded-t-lg">
        {item.getIllustration() ? (
          <img
            src={hamburguer}
            alt={item.getName()}
            className="object-cover rounded-lg"
          />
        ) : (
          <span>Img</span>
        )}
      </div>

      <div className="flex flex-col justify-center pb-2 px-2">
        <span className="text-md font-bold">{item.getName()}</span>
        <span className="text-md font-bold text-red-500">R${item.getPrice()},00</span>
        <p className="text-xs text-gray-600">
          {getIngredients()}
        </p>
      </div>
    </div>
  )
}
