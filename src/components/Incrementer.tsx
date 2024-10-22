type Props = {
  removeItem: () => void,
  addItem: () => void,
  amount: number
}

export default function Incrementer({removeItem, addItem, amount}: Props) {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => {
          if(amount > 0) {
            removeItem()
          }
        }}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-black font-extrabold"
      >
        -
      </button>
      <span>{amount}</span>
      <button
        onClick={() => {
          addItem()
        }}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-black font-extrabold"
      >
        +
      </button>
    </div>
  );
}
