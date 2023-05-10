import { headphones } from '../utils/constants'
import Card from './Card'

export default function DefaultHeadphones({ addCard }) {
  const headphonesCards = headphones.map(({ img, id, title, price, rate }) => (
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
      <h2 className="headphones__title">Наушники</h2>
      <div className="grid gap-[29px] card-grid">{headphonesCards}</div>
    </section>
  )
}
