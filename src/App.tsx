import Banner from "./components/Banner";
import CategorySelector from "./components/CategorySelector";
import Foods from "./components/Foods";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { categoryHamburguer } from "./mock/hamburguers";


export default function App() {
  return (
    <div>
      <Header/>

      <Banner/>
      <section className="flex w-full items-center justify-center py-3">
        <SearchBar/>
      </section>
      
      <main>
        <CategorySelector />
        <div className="py-3">
          <Foods category={categoryHamburguer}/>
        </div>
      </main>
    </div>
  )
}