import ChosenCard from './ChosenCard'
import Result from './Result'

export default function ShoppingCart({
  chosenCards,
  removeCard,
  setChosenCards,
}) {
  return (
    <section className="flex flex-col gap-[20px] w-full">
      <h2 className="headphones__title shopping-cart__title">Корзина</h2>
      <div className="flex cart justify-between items-start gap-[15px]">
        <div className="flex flex-col gap-[20px] w-full max-w-[633px]">
          {chosenCards.map(({ image, id, title, price, amount }) => (
            <ChosenCard
              key={id}
              image={image}
              title={title}
              price={price}
              removeCard={removeCard}
              id={id}
              setChosenCards={setChosenCards}
              amount={amount}
            />
          ))}
        </div>
        <Result chosenCards={chosenCards} />
      </div>
    </section>
  )
}
