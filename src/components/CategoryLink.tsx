type Props = {
  text: string
  active?: boolean
}

export default function CategoryLink({text, active=false}: Props) {
  return (
    <li className={`h-full ${active ? "text-red-600 font-bold border-b-4 border-b-red-600" : ""}  mx-4 py-2`}>
      {text}
    </li>
  )
}