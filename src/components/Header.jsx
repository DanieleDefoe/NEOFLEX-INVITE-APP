export default function Header({ chosenCards, displayCart, displayShop }) {
  return (
    <header className="flex justify-between items-center pe-4">
      <h1
        className="uppercase header__title hover:cursor-pointer hover:opacity-80"
        onClick={displayShop}
      >
        qpick
      </h1>
      <ul className="flex gap-[45px]">
        <li className="relative">
          <button className="button-heart w-[22px] h-[20px] hover:opacity-75"></button>
          <div className="w-4 h-4 rounded-[50%] button-cart__amount text-white flex items-center justify-center absolute top-[-7px] right-[-7px]">
            2
          </div>
        </li>
        <li className="relative">
          <button
            className="button-cart w-[22px] h-[20px] hover:opacity-75"
            onClick={displayCart}
          ></button>
          {chosenCards.length > 0 && (
            <div className="w-4 h-4 rounded-[50%] button-cart__amount text-white flex items-center justify-center absolute top-[-7px] right-[-7px]">
              {chosenCards.length}
            </div>
          )}
        </li>
      </ul>
    </header>
  )
}
