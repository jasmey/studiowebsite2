import React from 'react'
import Sidebar from '../Sidebar'
import './hbpages.css'

const Overview = () => {
  return (
    <>
    <div className='titlewrapper'>
    <Sidebar/>
        <div className='maintitle'>
            <h1 className='header'>overview</h1>
            <p className='subtitle'>In need of tips and tricks to navigating Bienen and the Wang Studio? </p>
            <p className='subtitle'>Look no further! (∩｀-´)⊃━☆ﾟ.*･｡ﾟ</p>
            <p className='subtitle'>Use the sidebar on the left to explore more.</p>
        </div>
    </div>
    </>
    
  )
}

export default Overview
