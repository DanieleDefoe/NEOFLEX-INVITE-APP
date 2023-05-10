export default function Result({ chosenCards }) {
  return (
    <div className="w-full max-w-[350px] min-h-[115px] rounded-[30px] cart__result bg-white flex flex-col justify-end gap-[15px]">
      <div className="flex justify-between w-full px-[18px] items-start">
        <h3 className="uppercase card__result-text">итого</h3>
        <p className="shopping-cart__amount">
          {chosenCards
            .map(
              ({ price, amount }) => parseInt(price, 10) * parseInt(amount, 10),
            )
            .reduce((acc, curr) => acc + curr, 0)}{' '}
          ₽
        </p>
      </div>
      <button className="w-full h-[65px] result__button rounded-[20px] text-white">
        Перейти к оформлению
      </button>
    </div>
  )
}
