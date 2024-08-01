import React from 'react'
import Sidebar from '../handbook/Sidebar'
import '../handbook/hbpages/hbpages.css'

const Handbook= () => {
  return (
    <>
    <div className='titlewrapper'>
    <Sidebar/>
        <div className='maintitle'>
          <div className='lowermargin'>
            <h1 className='header'>overview</h1>
            <div className='uppermargin'>
              <p className='subtitle'>In need of tips and tricks to navigating Bienen and the Wang Studio? </p>
              <p className='subtitle'>Look no further! (∩｀-´)⊃━☆ﾟ.*･｡ﾟ</p>
              <p className='subtitle'>Use the sidebar on the left to explore more.</p>
            </div>
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Handbook
