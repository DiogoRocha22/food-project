import { ReactNode } from "react"

type Props = {
  action: () => void
  children: ReactNode
}

export default function MainAction({action, children}: Props) {
  return (
    <div
    className="bg-primary p-6 text-white sticky bottom-0 rounded-t-3xl" 
    onClick={() => {
      action()
    }}>
      {children}
    </div>
  )
}