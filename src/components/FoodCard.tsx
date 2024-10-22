import { Item } from '../models/Item'
import hamburguer from '../assets/hamburguer.jpeg'
import { getIngredients } from '../utils/getIngredients'
import { Link } from 'react-router-dom'

type Props = {
  item: Item
}

export default function FoodCard({ item }: Props) {

  return (
    <Link to={`/item/${item.getId()}`} className="flex flex-col w-48 h-full border border-slate-400 rounded-xl">
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
          {getIngredients(item)}
        </p>
      </div>
    </Link>
  )
}
