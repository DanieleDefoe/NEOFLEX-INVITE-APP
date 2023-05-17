import globe from '../assets/globe.svg'

export default function Footer({ displayCart }) {
  return (
    <footer className="w-full max-w-[1110px] bg-white min-h-[150px] rounded-tl-[30px] self-end rounded-tr-[30px] mx-auto px-[29px] pt-[29px] flex justify-between">
      <h1 className="uppercase header__title">qpick</h1>
      <nav>
        <ul className="flex flex-col gap-[11px]">
          <a href="#" className="hover:opacity-75">
            Избранное
          </a>
          <a href="#" onClick={displayCart} className="hover:opacity-75">
            Корзина
          </a>
          <a href="#" className="hover:opacity-75">
            Контакты
          </a>
        </ul>
      </nav>
      <div className="flex flex-col gap-9">
        <a href="#" className="hover:opacity-75">
          Условия сервиса
        </a>
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
