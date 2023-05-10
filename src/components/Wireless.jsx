import Card from './Card'
import { wireless } from '../utils/constants'

export default function Wireless({ addCard }) {
  const wirelessCards = wireless.map(({ img, title, id, rate, price }) => (
    <Card
      key={id}
      addCard={addCard}
      title={title}
      image={img}
      price={price}
      rate={rate}
      id={id}
    />
  ))
  return (
    <section className="flex flex-col gap-[20px] w-full">
      <h2 className="headphones__title">Беспроводные Наушники</h2>
      <div className="grid gap-[29px] grid-cols-3 card-grid">
        {wirelessCards}
      </div>
    </section>
  )
}
