import globe from '../assets/globe.svg'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  const activeStyles = {
    fontWeight: 'bold',
  }

  return (
    <footer className="w-full max-w-[1110px] bg-white min-h-[150px] rounded-tl-[30px] self-end rounded-tr-[30px] mx-auto px-[29px] pt-[29px] flex justify-between">
      <h1 className="uppercase header__title">
        <Link to="/NEOFLEX-INVITE-APP/">qpick</Link>
      </h1>
      <nav>
        <ul className="flex flex-col gap-[11px]">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="favorites"
            className="hover:opacity-75"
          >
            Избранное
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="cart"
            className="hover:opacity-75"
          >
            Корзина
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="contacts"
            className="hover:opacity-75"
          >
            Контакты
          </NavLink>
        </ul>
      </nav>
      <div className="flex flex-col gap-9">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="policy"
          className="hover:opacity-75"
        >
          Условия сервиса
        </NavLink>
        <div className="flex gap-4 footer__langs">
          <img src={globe} className="w-[20px] h-[20px]" />
          <button className="hover:opacity-75 footer__lang current">Рус</button>
          <button className="hover:opacity-75 footer__lang">Eng</button>
        </div>
      </div>
      <div className="flex gap-[18px] footer__links">
        <a
          href="https://vk.com/pathetically.aesthetic"
          className="block w-[30px] h-[30px] footer__vk hover:opacity-75"
        ></a>
        <a
          href="#"
          className="block w-[30px] h-[30px] footer__whatsapp hover:opacity-75"
        ></a>
        <a
          href="#"
          className="block w-[30px] h-[30px] footer__telegram hover:opacity-75"
        ></a>
      </div>
    </footer>
  )
}
