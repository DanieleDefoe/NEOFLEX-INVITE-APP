import { Link, NavLink } from 'react-router-dom'

export default function Header({ chosenCards }) {
  return (
    <header className="flex justify-between items-center pe-4">
      <h1 className="uppercase header__title hover:cursor-pointer hover:opacity-80">
        <Link to="/NEOFLEX-INVITE-APP/">qpick</Link>
      </h1>
      <ul className="flex gap-[45px]">
        <li className="relative">
          <button>
            <Link
              to="favorites"
              className="button-heart w-[22px] h-[20px] hover:opacity-75 block"
            >
              <div className="w-4 h-4 rounded-[50%] button-cart__amount text-white flex items-center justify-center absolute top-[-7px] right-[-7px]">
                2
              </div>
            </Link>
          </button>
        </li>
        <li className="relative">
          <button>
            <Link
              to="cart"
              className="button-cart w-[22px] h-[20px] hover:opacity-75 block"
            >
              {chosenCards.length > 0 && (
                <div className="w-4 h-4 rounded-[50%] button-cart__amount text-white flex items-center justify-center absolute top-[-7px] right-[-7px]">
                  {chosenCards.length}
                </div>
              )}
            </Link>
          </button>
        </li>
      </ul>
    </header>
  )
}
