import { Item } from '../models/Item'

type Props = {
  item: Item
}

export default function FoodCard({item}: Props) {
  return (
    <div className='flex shadow-md shadow-black rounded-xl'>
      <h2 className='p-4 bg-black text-white'>Img</h2>

      <div>
        <h4>{item.getName()}</h4>
        <h6>R${item.getPrice()},00</h6>
      </div>
    </div>
  )
}