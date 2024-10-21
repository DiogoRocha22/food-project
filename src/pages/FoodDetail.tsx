import { useParams } from 'react-router-dom';
import { categoryHamburguer } from '../mock/hamburguers';
import { getIngredients } from '../utils/getIngredients';
import ExtraItem from '../components/ExtraItem';
import MainAction from '../components/MainAction';

export default function FoodDetail() {
  const { id } = useParams();
  const item = categoryHamburguer.getItems().find(item => item.getId() === Number(id));

  if(!item){
    return (
      <h2>Item inexistente</h2>
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
            <span className='text-xl text-opacity-50'>
              rel 30 min
            </span>
          </div>
          <span>{getIngredients(item, false)}</span>
        </section>

        <section className='pt-4 flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-extrabold text-xl'>Adicionar</h2>

            <div className='flex flex-col gap-3'>
              {categoryHamburguer.getExtras().map((extra, index) => (
                <ExtraItem key={index} extra={extra}/>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='font-extrabold text-xl'>Observação</h2>  

            <div className='w-full'>
              <textarea className='w-full border border-slate-600 rounded-2xl p-3 focus:outline-none' name="observation" id="observation" placeholder='Sem cebola, sem molho etc..' rows={3}></textarea>
            </div>
          </div>
        </section>        
      </main>

      <MainAction children={"Conteudo"} action={() => alert("click")}/>
    </div>
  )
}