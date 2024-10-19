import Banner from "./components/Banner";
import CategorySelector from "./components/CategorySelector";
import Header from "./components/Header";
import ItemGroup from "./components/ItemGroup";
import { categoryHamburguer } from "./mock/hamburguers";


export default function App() {
  return (
    <div>
      <Header/>

      <main className="pb-4">
        <h2 className="text-2xl font-extrabold p-4">Bem vindo ao Nosso <br /> Restaurante!</h2>
        <CategorySelector />

        <section className="py-4 px-5">
          <Banner/>
        </section>
        <div className="flex flex-col gap-4">
          <ItemGroup category={categoryHamburguer}/>
          <ItemGroup category={categoryHamburguer}/>
          <ItemGroup category={categoryHamburguer}/>
        </div>
      </main>
      
    </div>
  )
}