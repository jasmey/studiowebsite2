import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './hbpages.css'
import { FaRegStar } from "react-icons/fa";

const Tips = () => {
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
        <h1 className='header'>tips</h1>
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
                        <p className='question'>How do I attend Bienen concerts for free?
                        </p>
                          <div className='infodiv'>
                            <p className='info'>
                              The Skyline Piano Artist Series at Bienen is a invaluable opportunity for you to see world-class pianists like Yunchan Lim and Andras Schiff right on campus. Piano majors get free tickets, but you have to reserve them at the Concert Management Office in Pick Staiger before they run out, so make sure to check the calendar in advance and book as early as possible!
                            </p>
                            <p className='info'>
                             Also, all Bienen students get free complimentary ("comp") tickets at the door to any Bienen large or small ensemble concert (provided they're not sold out). Just show up and ask the ticketing counter for a "Bienen comp ticket".
                            </p>
                            <p className='subinfo'>
                              <strong><FaRegStar/> SUPER TIP: <FaRegStar/></strong> If you've got the time, working as an usher at Bienen can allow you to see concerts for free and get paid for it. When Yunchan Lim's Skyline Artist Series concert was so badly sold out that Bienen had to offer a special live livestreaming event in MCR just to accomodate the demand for tickets, I was able to watch him live because I ushered the concert. Contact the Concert Management Office for more information. They're always hiring.
                            </p>
                          </div>
                    </div>
                <div className='qwrapper'>
                    <p className='question'>Where are the best places in Bienen to take a quick nap?
                    </p>
                      <div className='infodiv'>
                        <p className='info'>
                        Let's be real, sometimes you need a quick power nap before or after a class but don't have time to go back to your dorm. The couches in the 3rd floor RCMA common room are great for stretching out and taking a nap, but 4th floor couches are generally quieter. Also, Regenstein's lounge has chairs good for sleeping (you just have to position them so that your arm can be in the crack between the chairs, that way your arm won't fall asleep), and on sunny days, the light filtering in from outside makes the room super cozy and warm. 
                        </p>
                        <p className='subinfo'>
                          Honestly, a lot of people just nap in the practice rooms, but out of consideration for other people who need the space to practice for exams and recitals, I would instead reserve a time on the signup sheet outside the door for when you plan to wake up and come back when you're done snoozing.
                        </p>
                        <p className='info'>
                        Outside of but pretty close to Bienen, the Norris Center's couches on the 2nd floor are great for quiet work and almost always empty, and the 3rd floor couches are similar, but with a cozier vibe. The 1st and underground floors and always comparatively noisy and busy.
                        </p>
                      </div>
                </div>
                <div className='qwrapper'>
                    <p className='question'>When are the peak hours for 3rd floor RCMA practice rooms?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                        It's good to avoid the piano practice room peak hours (about 1:00 PM to 6:00 PM). During these times, it's usually pretty difficult to find a practice room, and though you may be lucky and there are rooms available, there usually isn't much choice for which piano you can use.
                      </p>
                      <p className='subinfo'>
                      The best times to easily get a practice room are generally early in the morning or late at night.
                      </p>
                        
                    </p>

                </div>
                <div className='qwrapper'>
                    <p className='question'>How can I learn harpsichord and/or organ?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                      Bienen offers "free" (I mean, included in tuition) 0.5 credit/quarter harpsichord and organ lessons to piano majors. Email Dr. Stephen Alltop, introduce yourself, and ask nicely. </p>
                      <p className='info'>There are 2 organ/harpsichord practice rooms on 3rd floor RCMA. In Alice Millar, the small chapel has one organ (2 manuals, I think, probably 16-feet pipes). The larger, main chapel has a massive organ with 3 manuals, 5,235 pipes, and an impressive array of ranks, including 32-feet pipes. </p>
                      <p className='subinfo'>
                        <a href='https://www.opus327.org'>Opus 327</a> is an organization in Evanston dedicated to the preservation of the extremely old and magnificent Opus 327 Skinner pipe organ in Saint Luke's in downtown Evanston and is definitely worth checking out. (They sometimes hold organ concerts, but I think the organ also gets used in regular Sunday services, as well. You don't have to be Christian to attend, just respectful and open-minded.)

                      </p>
                    </p>

                </div>
              </div>
        </div>
    </div>
    </>
    
  )
}

export default Tips
