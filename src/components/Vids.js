import React from 'react'
import './Vids.css'
import VidItem from './VidItem'


function Vids() {
  return (
    <div className="shadedbg">
        <h1 className='topmargin'>Check out our amazing alumni and current students!</h1>
      <div className="vids__container">
        <div className="vids__wrapper">
          <ul className="vids__items">
            <VidItem
              path="https://www.youtube.com/watch?v=tGLyrXvpxSc"
              src="https://www.youtube.com/embed/tGLyrXvpxSc?si=Nk3Q7TSv74khZQKM"
              text="John Cao Senior Recital"
              />
            <VidItem
              path="https://www.youtube.com/watch?v=NVqKNcRCIc0"
              src="https://www.youtube.com/embed/NVqKNcRCIc0?si=pHtolHqf77V-YTR4"
              text="Vivian Chen Senior Recital"
            />
          </ul>
        </div>
        <div className="vids__wrapper">
          <ul className="vids__items"> 
            <VidItem
              path="https://www.youtube.com/watch?v=Qi2dePOqDJM"
              src="https://www.youtube.com/embed/Qi2dePOqDJM?si=G8092DYoD3iLHmLn"
              text="Justin Wang Junior Recital"
            /> 
            <VidItem
              path="https://www.youtube.com/watch?v=SFqdHlWkrFo"
              src="https://www.youtube.com/embed/SFqdHlWkrFo?si=jcWgyPYu06Zp6fAB"
              text="Christopher Yee Super Senior Recital"
            /> 
            
          </ul>
        </div>
        <div className="vids__wrapper">
          <ul className="vids__items">
          <VidItem
              path="https://www.youtube.com/watch?v=wvs3lxOwgJU"
              src="https://www.youtube.com/embed/wvs3lxOwgJU?si=ix8ZOqpfy8ZUrCKq"
              text="Kenneth He Mephisto Waltz"
            /> 
          <VidItem
              path="https://www.youtube.com/watch?v=am_Rn16kyBM"
              src="https://www.youtube.com/embed/am_Rn16kyBM?si=ptmMvUsR0P9uJNhd"
              text="Sophia Wong Lin Senior Recital"
            /> 
            
          </ul>
        </div>
        <div className="vids__wrapper">
          <ul className="vids__items">
          <VidItem
              path="https://www.youtube.com/watch?v=pexMf9Ez5XU"
              src="https://www.youtube.com/embed/pexMf9Ez5XU?si=U_Ny62mAyl1sU3ze"
              text="Melody Hsu Eric Chou Cover (>1k subscribers!)"
            /> 
            <VidItem
              path="https://www.youtube.com/watch?v=m7BBbQ0TObY"
              src="https://www.youtube.com/embed/m7BBbQ0TObY?si=xO4iWA86obV7WauT"
              text="Guannan Liu Beethoven Sonata Op. 109"
            />
          </ul>
        </div>
        <div className="vids__wrapper">
          <ul className="vids__items">
          <VidItem
              path="https://www.youtube.com/watch?v=LE9DqIK-zmQ"
              src="https://www.youtube.com/embed/LE9DqIK-zmQ?si=VuPKMJjY419NMGhn"
              text="Hazel Friedman Chicago's Dame Myra Hess Memorial Concerts Recital"
            />
            <VidItem
              path="https://youtu.be/uAwh01biR_A?si=b99zxfWTu8QBr5vA"
              src="https://www.youtube.com/embed/uAwh01biR_A?si=b99zxfWTu8QBr5vA"
              text="Lydia Pui Gershwin Concerto in F"
            />
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Vids
