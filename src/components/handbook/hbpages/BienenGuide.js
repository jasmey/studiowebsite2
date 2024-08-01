import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './hbpages.css'
import { FaRegStar } from "react-icons/fa";

const BienenGuide = () => {
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
        <h1 className='header'>guide to bienen</h1>
            <div className='button_wrapper'>
              <button onClick={handlePrevious} disabled={currentPageIndex === 0}>
              Previous
              </button>
              <button className='button_invalid' onClick={handleNext} disabled={currentPageIndex === pages.length - 1}>
              Next
              </button>
            </div>
            <div className='scrollable_container'>
                <div className='qwrapper'>
                        <p className='question'>Where can I find pianos outside of Bienen?
                    
                        </p>
                        <div className='infodiv'>
                    <ul className='bullets'>
                        <li>Alice Millar (run of the mill upright in a classroom and a nice baby grand in the big chapel)</li>
                        <li>Alison 1st Floor Common Room (electric keyboard, but pretty much functional)</li>
                        <li>720 Emerson (SAI, the music sorority- they have a really nice well-maintained baby grand, though the keys are heavy.)</li>
                        <p className='subinfo'><strong><FaRegStar/> SUPER TIP: <FaRegStar/></strong>
                        If you're a girl or non-binary, apply to live here. You don't have to be a sorority member, and they have a large music library filled with piano scores and you can use the piano whenever you want. Plus they're the second cheapest dorm on campus! (No a.c., though.)
                        </p>
                        <li>Willard (absolutely awful most of the time- almost never tuned properly and you have to practice in public. but better than nothing!)</li>
                        <li>Elder (bunch of the keys don't work, upright)</li>
                        <li>Lincoln, Schapiro, whatever you want to call it (a baby grand- decent, sometimes in tune)</li>
                        <li>Plex, basement (god-awful. got enemies? tell them to practice on this)</li>
                        <li>Lutkin, stage (REALLY nice grand piano, but often locked)</li>
                        <li>West Fairchild (pretty bad)</li>
                        <li>Sheil Catholic Center (decent grand in the chapel, and a decent electric upright in the music room on the 2nd floor. if you become a music minister, you can get access to both of these)</li>
                    </ul>
                    </div>
                    </div>
                <div className='qwrapper'>
                <p className='question'>Snacks</p>
                <div className='infodiv'>
                    <p className='info'>
                      There's vending machines with junk food and drinks next to the wooden benches outside of McClintock, but it's a huge ripoff. (Upcharges by at least 3x.) You save a lot of money by buying/bringing your own and storing them in your locker.
                    </p>
                    <p className='info'>
                      Although, if you really are set on buying from a vending machine, there's more of them for extended choices right in Norris underground level (the level with an entrance adjacent to Pick-Staiger), including some healthier options (I think it's called Farmer's Choice? A vending machine with salads and greens.) and a wider variety of Pop Tarts.
                    </p>
                    </div>
                </div>
                
                <div className='qwrapper'>
                    <p className='question'>Lockers
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                        Piano majors get a locker for free! It's not huge, but you can store bags, snacks, sheet music, and whatever  you want in there. Just apply for one using the instructions here: <a href='https://www.music.northwestern.edu/resources/students/locker-check-out'>Bienen Locker Checkout</a> </p>
                      <p className='subinfo'><strong>TIP:</strong> Remember to bring your own personal lock! Only instrument lockers come with locks included, and piano majors don't get those.</p>
                      
                    </p>

                </div>
              </div>
        </div>
    </div>
    </>
    
  )
}

export default BienenGuide
