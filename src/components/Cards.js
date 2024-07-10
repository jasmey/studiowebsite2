import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Past Studio Events!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src="images/2022DrWangClaraSchumannConcerto.jpg"
                text="2022 Dr. Wang Clara Schumann Concerto"
                label='Performance'
                path='https://www.music.northwestern.edu/events/northwestern-university-chamber-orchestra-16'/>
                <CardItem
                src="images/2023AmyBaoJuniorRecital.jpg"
                text="2023 Amy Bao Junior Recital"
                label='Recital'
                path='https://www.music.northwestern.edu/events/amy-bao-piano'/>
                <CardItem
                src="images/2023FreyaOuJuniorRecital.jpg"
                text="2023 Freya Ou Junior Recital"
                label='Recital'
                path='https://www.music.northwestern.edu/events/freya-ou-piano'/>
                <CardItem
                src="images/2023JasmineMeyerJuniorRecital.jpg"
                text="2023 Jasmine Meyer Sophomore Recital"
                label='Recital'
                path='/'/>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
