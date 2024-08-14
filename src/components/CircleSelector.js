import React from 'react'
import './CircleSelector.css'

function CircleSelector() {
  return (
    <div className='btn-cont'>
    <div className='leftrow'>
        <div className='t-button t-1'>
            Competitions
        </div>
        <div className='t-button t-1'>
            <span className='toprow'>Summer Programs</span>
        </div>
        </div>
        <div className='rightrow'>
        <div className='t-button t-2'>
        <span className='toprow'>Gigs ($$$)</span>
        </div>
        <div className='t-button t-2'>
            Repertoire Ideas
        </div>
    </div>
    
    </div>
  )
}

export default CircleSelector
