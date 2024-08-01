import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './hbpages.css';
import { FaRegStar } from "react-icons/fa";

const Juries = () => {
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
            <h1 className='header'>juries</h1>
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
                    <p className='question'>What are piano juries?</p>
                    <div className='infodiv'>
                        <p className='info'>
                          Every year, piano majors have to take a short weekly piano technique class, taught by a grad student. 
                        </p>
                        <p className='info'>
                          At the end of each quarter of technique class, you'll play an informal performance assessment of what you learned in technique class for that grad student, as well as a more formal assessment of required repertoire types for the piano department faculty.
                        </p>
                        <p className='info'>
                          The below document decribes which quarters you'll have technique class/jury and performance juries, as well as what requirements each jury will require.
                        </p>
                        <p className='info centeritem'><FaRegStar /><strong> Make sure to read it carefully so you don't miss anything! </strong><FaRegStar />
                        </p>
                        <a href="/documents/Piano Curriculum and Jury Requirements 11.07.23.pdf" id="linkdoc" target="blank"> Piano Juries Requirements (Updated 2023 Fall)</a>
                    </div>
                </div>
                <div className='qwrapper'>
                    <p className='question'>How do I sign up for juries?</p>
                    <p className='infodiv'>
                      <p className='info'>
                        A week or so before each jury, the Piano Department will post a sign-up sheet on the bulletin board at the end of the main 4th floor RCMA hallway. 
                      </p>
                      <p className='info'>
                        Make sure to check your email often for the announcement (usually during the week before the jury date)!
                      </p> 
                      <p className='info'>
                        Snagging a good jury time for you can help prevent time conflicts and stress from end-of-quarter exams.
                      </p>
                        
                    </p>

                </div>
                <div className='qwrapper'>
                    <p className='question'>What should I do on the days of my technique and performance juries?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                        Technique juries are very informal. Each grad student has different preferences on how they will test their students (for example, my 2021-22 technique juries were less than 5 minutes of scale-technic exercises, and we just filmed ourselves in the practice rooms using our phones and sent in the videos thru email).
                        
                      </p>
                      <p className='info'>
                        Performance juries, on the other hand, are similar to final exams for performance majors. Make sure to dress appropriately! Overdressed is better than underdressed- show up in what you'd normally wear to perform in a recital or concert. 
                        
                      </p> 
                      <p className='subinfo'>
                        You don't need to bring sheet music to your performance jury, but right after you bow for the jury judges (the Piano Department professors), you'll need to announce what you'll be playing, so make sure to memorize the name of your piece! (I'm talkin' composer, opus, key, etc.) 
                        
                      </p>
                      <p className='info'>
                        Lastly, piano performance juries take place in Galvin. Get there 10 minutes before your scheduled jury time and wait backstage until the person before you comes offstage (the entrance to backstage is a set of double doors around the side of Galvin, on the right side of the big windows facing the lake in the lobby). 
                    
                        
                      </p>
                        
                    </p>

                </div>
              </div>
            </div>
    </div>
    </>
    
  )
}

export default Juries
