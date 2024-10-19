import { Category } from '../models/Category'
import FoodCard from './FoodCard'

type Props = {
  category: Category
}

export default function ItemGroup({category}: Props) {
  return (
    <section>
      <h6 className='text-lg font-extrabold px-4 py-2'>Popular</h6>

      <div className='flex overflow-x-scroll px-3 gap-3'>
        {category.getItems().map((item, index) => (
          <FoodCard key={index} item={item}/>
        ))}
      </div>
    </section>
  )
}