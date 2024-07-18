import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Past Studio Events!</h1>
        <div className='cards__container'>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2024Post-BacktoBachJasperandAnyaLiu.jpg"
              text="2024 Post-Back to Bach Jasper and Anya Liu"
              label="Celebration"
              path="/album"
            />
            <CardItem
              src="images/2024Post-BacktoBachStudioParty.jpg"
              text="2024 Post-Back to Bach Studio Party"
              label="Celebration"
              path="/album"
            />
            <CardItem
              src="images/2024SophomoreJuryCelebration.jpg"
              text="2024 Sophomore Jury Celebration"
              label="Celebration"
              path="/album"
            />
            <CardItem
              src="images/2024FreyaOuSeniorRecital.jpg"
              text="2024 Freya Ou Senior Recital"
              label="Recital"
              path="https://planitpurple.northwestern.edu/event/611904"
            />
          </ul>
          
        </div>
        </div>
    </div>
  )
}

export default Cards
