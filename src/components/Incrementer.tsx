import { useState } from "react";

export default function Incrementer() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => {
          setAmount(amount - 1);
        }}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-black font-extrabold"
      >
        -
      </button>
      <span>{amount}</span>
      <button
        onClick={() => {
          setAmount(amount + 1);
        }}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-black font-extrabold"
      >
        +
      </button>
    </div>
  );
}
