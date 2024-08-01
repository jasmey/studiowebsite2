import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './hbpages.css'

const ChicagoMusic = () => {
  const navigate = useNavigate();

  const pages = ['/reqs/recitals', '/reqs/juries', '/reqs/lessons', '/reqs/studioclass', '/tips', '/chicagomusic', '/bienenguide']; // Add more pages as needed
  const currentPageIndex = pages.indexOf(window.location.pathname);

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      navigate(pages[currentPageIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1]);
    }
  };

  return (
    <>
    <div className='titlewrapper'>
    <Sidebar/>
        <div className='maintitle'>
        <h1 className='header'>music in chicago</h1>
            <div className='button_wrapper'>
              <button onClick={handlePrevious} disabled={currentPageIndex === 0}>
              Previous
              </button>
              <button onClick={handleNext} disabled={currentPageIndex === pages.length - 1}>
              Next
              </button>
            </div>
            <div className='scrollable_container'>
                <div className='qwrapper'>
                        <p className='question'>How can I watch big names like Trifonov and Barenboim perform live for $15?
                    
                        </p>
                          <div className='infodiv'>
                            <p className='info'>
                              The CSO has a huge student discount. You can buy tickets online on their website- just enter the code "STUDENT" before you pick your seats. 
                            </p>
                            <p className='info'>
                              However, student ticket pricing usually doesn't become available until a month or a few weeks before the performance, so make sure you check the website regularly in the weeks leading up to the performance so you can snag the seats with the best view and acoustics as soon as they're available under student prices!
                            </p>
                            <p className='subinfo'>
                              <strong>TIP:</strong> Bring your student ID when you go to the concert, as they may require you to show it at the door.
                            </p>
                          </div>
                    </div>
                <div className='qwrapper'>
                <p className='question'>Tips for Going to the CSO</p>
                <div className='infodiv'>
                    <ul className='bullets'>
                        <li>The CSO has a really cool gift shop that's worth paying a visit! (I got a nice piano-pattern lanyard there for about 7 dollars, and they have loads of fun music-patterned socks and other knicknacks.)                
                        </li>
                        <li>Never go to the CSO alone. Ideally, find 3-4 other friends to go with. CSO concerts usually end late at night, and you NEVER want to be in Chicago alone at night.  Don't worry, though- if you're in a large group, it's pretty safe!
                        </li>
                        <li>Sign up for the CSO's email and mailing list! They'll send you previews of who they've got scheduled for each season and you can plan way in advance (that way, you'll never miss out on your favorite pianists).
                        </li>
                        <li>
                          For piano concerts, try to get Lower Balcony or Orchestra seats. It's really hard to hear from the Upper Balcony, and you can't see much, either.
                        </li>
                    </ul>
                    </div>
                </div>
                
                <div className='qwrapper'>
                    <p className='question'>How to listen to/participate in jazz in Chicago?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                        Honestly, the easiest thing to do is befriend a jazz major. They often have gigs at nearby bars and clubs, or even just jam sessions (a type of performance where you can show up and just play!), and are often willing to give rides. It's polite to help chip in with gas, of course. </p>
                      <p className='subinfo'>Ask them for practicing and performing tips. They can give you an in to the entire jazz community! The more you play and the more people you meet, the better you'll get. </p>
                      <p className='info'>If it's difficult to get ahold of jazz majors, there's also a Northwestern Jazz Club Groupme. You can contact me (Jasmine) and I'll send you the invite link. They regularly do jam sessions (usually in the evening) and it's very laid-back and low-pressure.</p>
                      
                    </p>

                </div>
              </div>
        </div>
    </div>
    </>
    
  )
}

export default ChicagoMusic
