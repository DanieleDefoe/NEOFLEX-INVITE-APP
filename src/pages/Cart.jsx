import ShoppingCart from '../components/ShoppingCart'
import { useOutletContext } from 'react-router-dom'

export default function Cart() {
  const { chosenCards, removeCard, setChosenCards } = useOutletContext()
  return (
    <ShoppingCart
      chosenCards={chosenCards}
      removeCard={removeCard}
      setChosenCards={setChosenCards}
    />
  )
}
