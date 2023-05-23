import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'

export default function AppLayout() {
  const [chosenCards, setChosenCards] = useState(
    () => JSON.parse(sessionStorage.getItem('chosenCards')) || [],
  )

  useEffect(() => {
    sessionStorage.setItem('chosenCards', JSON.stringify(chosenCards))
  }, [chosenCards])

  function addCard(card) {
    const idx = chosenCards.findIndex((el) => el.id === card.id)
    if (idx === -1) {
      setChosenCards((prevChosenCards) => [
        ...prevChosenCards,
        { ...card, amount: 1 },
      ])
    } else {
      const chosenCopy = [...chosenCards]
      chosenCopy[idx] = { ...card, amount: chosenCopy[idx].amount + 1 }
      setChosenCards(chosenCopy)
    }
  }

  function removeCard(cardId) {
    setChosenCards((prevChosenCards) =>
      prevChosenCards.filter((card) => card.id !== cardId),
    )
  }

  return (
    <div className="max-w-[1135px] mx-auto min-h-screen grid app">
      <Header chosenCards={chosenCards} />
      <MainSection>
        <Outlet
          context={{ addCard, removeCard, chosenCards, setChosenCards }}
        />
      </MainSection>
      <Footer />
    </div>
  )
}
