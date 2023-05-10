import Header from './components/Header'

import MainSection from './components/MainSection'

import DefaultHeadphones from './components/DefaultHeadphones'
import Wireless from './components/Wireless'
import ShoppingCart from './components/ShoppingCart'

import Footer from './components/Footer'

import React, { useState, useEffect } from 'react'

export default function App() {
  const [chosenCards, setChosenCards] = useState(
    () => JSON.parse(sessionStorage.getItem('chosenCards')) || [],
  )

  const [currentDisplay, setCurrentDisplay] = useState('shop')

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

  function toggleDisplay() {
    setCurrentDisplay((prevDisplay) =>
      prevDisplay === 'shop' ? 'chosen cards' : 'shop',
    )
  }

  return (
    <div className="max-w-[1135px] mx-auto min-h-screen grid app">
      <Header chosenCards={chosenCards} toggleDisplay={toggleDisplay} />
      <MainSection>
        {currentDisplay === 'shop' ? (
          <>
            <DefaultHeadphones addCard={addCard} />
            <Wireless addCard={addCard} />
          </>
        ) : (
          <ShoppingCart
            chosenCards={chosenCards}
            removeCard={removeCard}
            setChosenCards={setChosenCards}
          />
        )}
      </MainSection>
      <Footer toggleDisplay={toggleDisplay} />
    </div>
  )
}
