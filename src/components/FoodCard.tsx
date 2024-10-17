import { Item } from '../models/Item'
import hamburguer from '../assets/hamburguer.jpeg'

type Props = {
  item: Item
}

export default function FoodCard({ item }: Props) {
  return (
    <div className="flex gap-2 border-t p-2 border-gray-600">
      {/* Contêiner de Imagem com dimensões fixas */}
      <div className="flex-none w-32 h-32 flex items-center justify-center bg-black text-white rounded-lg">
        {item.getIllustration() ? (
          <img
            src={hamburguer}
            alt={item.getName()}
            className="object-cover w-32 h-32 rounded-lg"
          />
        ) : (
          <span>Img</span>
        )}
      </div>

      {/* Informações do Hambúrguer */}
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-bold">{item.getName()}</h4>
        <h6 className="text-sm font-semibold text-gray-700">R${item.getPrice()},00</h6>
        <p className="text-xs text-gray-600">{item.getIngredients().join(", ")}</p>
      </div>
    </div>
  )
}
