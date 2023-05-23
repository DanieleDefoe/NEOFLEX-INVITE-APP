import DefaultHeadphones from '../components/DefaultHeadphones'
import Wireless from '../components/Wireless'
import { useOutletContext } from 'react-router-dom'

export default function Shop() {
  const { addCard } = useOutletContext()
  return (
    <>
      <DefaultHeadphones addCard={addCard} />
      <Wireless addCard={addCard} />
    </>
  )
}
