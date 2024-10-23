import { useParams } from 'react-router-dom';
import { categoryHamburguer } from '../mock/hamburguers';
import { getIngredients } from '../utils/getIngredients';
import ExtraItem from '../components/ExtraItem';
import MainAction from '../components/MainAction';
import { useState, useEffect, useCallback } from 'react';
import { Extra } from '../models/Extra';
import { OrderItem } from '../models/OrderItem';

export default function FoodDetail() {
  const { id } = useParams();
  const item = categoryHamburguer.getItems().find(item => item.getId() === Number(id));
  
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);

  useEffect(() => {
    if (item) {
      setSelectedExtras([]); 
    }
  }, [item]);
  
  const updateExtras = useCallback((extra: Extra) => {
    setSelectedExtras(prevExtras => {
      const isExtraSelected = prevExtras.find(e => e.name === extra.name);
  
      if (!isExtraSelected) {
        return [...prevExtras, { ...extra, quantity: 1 }];
      } else {
        const updatedExtras = prevExtras.map(e => 
          e.name === extra.name ? { ...e, quantity: extra.quantity } : e
        );
  
        return updatedExtras.filter(e => e.quantity > 0);
      }
    });
  }, []);
  
  function saveOrderData(){
    const itemPrice = item?.getPrice();
    if (!itemPrice){
      throw new Error("Valor do pedido invalido")
    } 
    const order = new OrderItem(itemPrice, selectedExtras)
    localStorage.setItem("order-item", JSON.stringify(order))
  }

  useEffect(() => {
    const total = selectedExtras.reduce((sum, extra) => sum + (extra.price * extra.quantity), item?.getPrice() || 0);
    setOrderTotal(total);
  }, [selectedExtras, item]);

  if(!item){
    return (
      <h4>Item não encontrado</h4>
    )
  }

  return (
    <div>
      <picture>
        <img className='h-auto w-full object-cover rounded-b-3xl' src={item.getIllustration()} alt="food" />
      </picture>

      <main className='p-4'>
        <section>
          <div className='flex items-center justify-between'>
            <div className='font-extrabold text-2xl flex flex-col'>
              <h2>{item.getName()}</h2>
              <h2 className='text-red-500'>R$ {item.getPrice()},00</h2>
            </div>
            <span className='text-xl text-opacity-50'>rel 30 min</span>
          </div>
          <span>{getIngredients(item, false)}</span>
        </section>

        <section className='pt-4 flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-extrabold text-xl'>Adicionar</h2>

            <div className='flex flex-col gap-3'>
              {categoryHamburguer.getExtras().map((extra, index) => (
                <ExtraItem key={index} extra={extra} updateExtras={updateExtras} />
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='font-extrabold text-xl'>Observação</h2>  

            <div className='w-full'>
              <textarea 
                className='w-full border border-slate-600 rounded-2xl p-3 focus:outline-none' 
                name="observation" 
                id="observation" 
                placeholder='Sem cebola, sem molho etc..' 
                rows={3} 
                aria-label="Observação"
              ></textarea>
            </div>
          </div>
        </section>        
      </main>

      <MainAction 
        children={
          <div className='flex items-center justify-between'>
            <h3>Adicionar ao Pedido</h3>
            <h2>R$ {orderTotal},00</h2>
          </div>
        } 
        action={() => saveOrderData()}
      />
    </div>
  );
}
