import { Extra } from '../models/Adicional'
import Incrementer from './Incrementer'

type Props = {
  extra: Extra
}

export default function ExtraItem({extra}: Props) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <div className='bg-black p-5 rounded-lg'>
          img
        </div>

        <div className='flex flex-col gap-1 text-xl font-bold'>
          <h4>{extra.name}</h4>
          <h4 className='text-red-500'>R$ {extra.price},00</h4>
        </div>
      </div>

      <Incrementer />
    </div>
  )
}