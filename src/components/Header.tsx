import { IoSearch } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="bg-primary w-full flex z-50 justify-between items-center p-3 text-white sticky top-0 ">
      <HiMenuAlt1 size={40}/>

      <IoSearch size={30} color="#ffffff" fill="#ffffff"/>
    </header>
  )
}