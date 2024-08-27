import React from 'react'
import './CircleSelector.css'
import { useState } from 'react'
import ExplorePages from './ExplorePages'


function CircleSelector() {
  const [summerPrograms, setSummerPrograms] = useState(false)
  const [competitions, setCompetitions] = useState(false)
  const [gigs, setGigs] = useState(false)
  const [rep, setRep] = useState(false)

  const handleButton1Click = () => {
    setSummerPrograms(true);
  };
  const handleButton2Click = () => {
    setCompetitions(true);
  };
  const handleButton3Click = () => {
    setGigs(true);
  };
  const handleButton4Click = () => {
    setRep(true);
  }

  const isAnyPropTrue = summerPrograms || competitions || gigs || rep;

  return (
    <>
      {isAnyPropTrue ? (
        <div>
          <ExplorePages 
            summerPrograms={summerPrograms} 
            competitions={competitions} 
            gigs={gigs} 
            rep={rep}
          />
        </div>
      ) : (
        <div className='btn-cont'>
          <div className='leftrow'>
            <div className='t-button t-1' onClick={handleButton2Click}>
              Competitions
            </div>
            <div className='t-button t-1' onClick={handleButton1Click}>
              <span className='toprow'>Summer Programs </span>
            </div>
          </div>
          <div className='rightrow'>
            <div className='t-button t-2' onClick={handleButton3Click}>
              <span className='toprow'>Gigs </span>
            </div>
            <div className='t-button t-2' onClick={handleButton4Click}>
              Repertoire Ideas
            </div>
          </div>
        </div>
      )}
    </>
    
  )
}

export default CircleSelector
