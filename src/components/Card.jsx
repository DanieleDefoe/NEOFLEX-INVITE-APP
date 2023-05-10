export default function Card({
  image,
  title,
  price,
  rate,
  id,
  addCard,
  amount,
}) {
  return (
    <article className="w-[350px] h-[407px] rounded-[30px] card bg-white pb-[26px] pt-[15px] px-[20px] flex flex-col justify-between">
      <div className="h-full flex items-center justify-center">
        <img src={`/src/assets/${image}`} className="mx-auto" alt="" />
      </div>
      <div className="grid grid-cols-2 items-center justify-items-start gap-y-[25px]">
        <h3 className="card__title">{title}</h3>
        <p className="justify-self-end card__price">{price} ₽</p>
        <p className="card__rate flex items-center gap-[10px]">
          <img src="/src/assets/star.svg" /> {rate}
        </p>
        <button
          onClick={() => addCard({ image, title, price, id, amount })}
          className="justify-self-end card__buy-btn hover:opacity-60 transition-all"
        >
          Купить
        </button>
      </div>
    </article>
  )
}
