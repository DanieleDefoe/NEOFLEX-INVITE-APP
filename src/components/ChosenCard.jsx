import { useEffect } from 'react'

export default function ChosenCard({
  image,
  title,
  price,
  removeCard,
  id,
  setChosenCards,
  amount,
}) {
  function incrementAmount() {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.map((card) =>
        card.id === id ? { ...card, amount: card.amount + 1 } : card,
      ),
    )
  }

  function decrementAmount() {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.map((card) =>
        card.id === id ? { ...card, amount: card.amount - 1 } : card,
      ),
    )
  }

  useEffect(() => {
    if (amount < 1) {
      removeCard(id)
    }
  }, [amount])

  return (
    <article className="w-100% min-h-[218px] relative rounded-[30px] bg-white chosen-card overflow-hidden flex items-center py-5 pl-[18px] pr-[28px] gap-5">
      <div className="flex flex-col items-center gap-4 w-[146px]">
        <img src={image} />
        <div className="flex w-full justify-between items-center">
          <button
            className="decrement-amount w-[35px] h-[30px]"
            onClick={decrementAmount}
          ></button>
          <p className="chosen-card__amount">{amount}</p>
          <button
            className="increment-amount w-[35px] h-[30px]"
            onClick={incrementAmount}
          ></button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="chosen-card__title">{title}</h3>
        <p className="chosen-card__price">{price} ₽</p>
      </div>
      <p className="absolute bottom-[21px] right-[21px] chosen-card__total">
        {price * amount} ₽
      </p>
      <button
        className="absolute top-[21px] right-[21px] w-[20px] h-[17px] trash-btn"
        onClick={() => removeCard(id)}
      ></button>
    </article>
  )
}
