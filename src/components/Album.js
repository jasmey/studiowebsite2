import React from 'react'
import './AlbumCard.css'
import CardItem from './AlbumCard'


function Album() {
  return (
    <div className="album">
      <div className="cards__container">
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
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2024FreyaOuSeniorRecital.jpg"
              text="2024 Freya Ou Senior Recital"
              label="Recital"
              path="https://planitpurple.northwestern.edu/event/611904"
            />
            <CardItem
              src="images/2024JasmineMeyerJuniorRecital.jpg"
              text="2024 Jasmine Meyer Junior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/jasmine-meyer-piano"
            />
            <CardItem
              src="images/2024JustinWangJuniorRecital.jpg"
              text="2024 Justin Wang Junior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/justin-wang-piano"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2024OlivierElkanSeniorRecital.jpg"
              text="2024 Olivier Elkan Senior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/olivier-elkan-piano-0"
            />
            <CardItem
              src="images/2023JohnCaoSeniorRecital.jpg"
              text="2023 John Cao Senior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/john-cao-piano"
            />
            <CardItem
              src="images/2023JustinWangSophomoreRecital.jpg"
              text="2023 Justin Wang Sophomore Recital"
              label="Recital"
              path="/album"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2023SherwinPanJuniorRecital.jpg"
              text="2023 Sherwin Pan Junior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/sherwin-pan-piano"
            />
            <CardItem
              src="images/2024FreyaandDrWang.jpg"
              text="2024 Freya and Dr. Wang (Freya's Senior Recital)"
              label=""
              path="/"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2023AmyBaoJuniorRecital.jpg"
              text="2023 Amy Bao Junior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/amy-bao-piano"
            />
            <CardItem
              src="images/2023DrWangSoloRecital1.jpg"
              text="2023 Dr. Wang Solo Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/sylvia-wang-piano-0"
            />
            <CardItem
              src="images/2023DrWangSoloRecital2.jpg"
              text="2023 Dr. Wang Solo Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/sylvia-wang-piano-0"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2023FreyaOuJuniorRecital.jpg"
              text="2023 Freya Ou Junior Recital"
              label="Recital"
              path="https://www.music.northwestern.edu/events/freya-ou-piano"
            />
            <CardItem
              src="images/2023JasmineMeyerJuniorRecital.jpg"
              text="2023 Jasmine Meyer Sophomore Recital"
              label="Recital"
              path="/"
            />
            <CardItem
              src="images/2022SophiaSeniorRecital2.jpg"
              text="2022 Sophia Wong Lin Senior Recital"
              label="Recital"
              path="/album"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2022ThanksgivingOrphans.jpg"
              text="2022 Thanksgiving Orphans with Dr. Wang at Furama Argyle"
              label="Celebration"
              path="/album"
            />
            <CardItem
              src="images/2022SophiaSeniorRecital1.jpg"
              text="2022 Sophia Wong Lin and Dr. Wang"
              label="Recital"
              path="/album"
            />
            <CardItem
              src="images/2022NewJerseyRecital.jpg"
              text="2022 Team New Jersey Recital (Jasmine Meyer and Kenny He)"
              label="Recital"
              path="/album"
            />
          </ul>
        </div>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/2022DrWangClaraSchumannPerformance.jpg"
              text="2022 Dr. Wang Clara Schumann Performancel"
              label="Performance"
              path="https://www.music.northwestern.edu/events/northwestern-university-chamber-orchestra-16"
            />

            <CardItem
              src="images/2022DrWangClaraSchumannConcerto.jpg"
              text="2022 Dr. Wang Clara Schumann Concerto"
              label="Performance"
              path="/album"
            />
            <CardItem
              src="images/CovidTimesWangStudioonZoom.jpg"
              text="Covid Times Wang Studio on Zoom"
              label=""
              path="/album"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Album
