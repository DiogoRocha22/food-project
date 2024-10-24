export default function OrderDetail() {
  return (
    <div>
      <div className="flex items-center">
        <picture>
          <img src="adada" alt="image" />
        </picture>
        <div className="flex flex-col">
          <h2>Total: <span className="text-red-500">{"R$ 22,00"}</span></h2>
          <h6>Status do pedido: <span className="text-green-500">Pronto</span></h6>
        </div>
      </div>

      <main>
        Items no pedido
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </main>
    </div>
  )
}