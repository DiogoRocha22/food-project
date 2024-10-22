import { useEffect, useState } from 'react'
import { Extra } from '../models/Extra'
import Incrementer from './Incrementer'

type Props = {
  extra: Extra,
  updateExtras: (value: Extra) => void
}

export default function ExtraItem({extra, updateExtras}: Props) {
  const [itemAmount, setAmount] = useState(0)
  extra["quantity"] = itemAmount;
  console.log(extra)

  function addItem(){
    setAmount(prevAmount => prevAmount + 1)
  }
  function removeItem(){
    setAmount(prevAmount => prevAmount - 1)
  }

  useEffect(() => {
    updateExtras(extra)
  }, [itemAmount])

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

      <Incrementer amount={itemAmount} addItem={addItem} removeItem={removeItem}/>
    </div>
  )
}