import CategoryLink from "./CategoryLink";

export default function CategorySelector() {
  return (
    <nav className="sticky top-16 text-slate-700 text-opacity-80 bg-slate-50 z-50">
      <ul className="flex justify-start list-none overflow-x-auto text-nowrap h-full">
        <CategoryLink active={true} text="Hamburguer"/>
        <CategoryLink text="Pizzas"/>
        <CategoryLink text="Doces e Sobremesas" />
        <CategoryLink text="Petiscos" />
      </ul>
    </nav>
  )
}