import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="p-2 border border-gray-900 rounded-lg flex items-center gap-2 w-4/5">
      <IoSearch/>
      <input className="border-none focus:outline-none w-full" type="text" placeholder="Procure no cardápio" />
    </div>
  )
}