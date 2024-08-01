import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './hbpages.css';
import { FaRegStar } from "react-icons/fa";

const Lessons = () => {
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
            <h1 className='header'>lessons</h1>
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
                    <p className='question'>How do I sign up for lessons?</p>
                    <div className='infodiv'>
                        <p className='info'>
                          Every quarter, Dr. Wang will hang a sign-up sheet on her office door, located on 4th floor RCMA (you can find her room number on the directory by the 4th floor elevator doors).</p>
                        <p className='info'> Once you get there, pick a time from the available spots and write your name and contact info to claim it. </p>
                        <p className='info'>If the only spots that fit your schedule are taken, you can contact the people who've claimed it via their contact info and ask to trade.
                        </p>
                        </div>
                </div>
                <div className='qwrapper'>
                    <p className='question'>What should I bring to my lesson?</p>
                    <p className='infodiv'>
                      <p className='info'>
                        Dr. Wang allows her lessons to be recorded. It's a great idea to invest in a small handheld recorder (for example, I use the TASCAM DR-40 Linear PCM Recorder) and record your lessons onto an SD card so you can revisit the lesson later if needed.
                      </p>
                      <p className='info'>
                        You ideally should have about 3 excerpts of music prepared for class: 
                      <ol className='ordlist'>
                        <li>One piece you're currently working on</li>
                        <li>One piece you've recently finished</li>
                        <li>One piece you're planning to work on next</li>
                      </ol>
                      </p> 
                      <p className='info'>
                        Always bring 2 copies of what you'll be playing to lessons.</p>
                      <p className='subinfo'>
                        If you don't use physical copies of music (hallo, iPad users), you need to send Dr. Wang a <em>compressed</em> PDF of your music AT LEAST a day in advance to give her adequate time to download it onto her iPad before the lesson. Or AirDrop it. Which is a lot easier.
                      </p>
                        
                    </p>

                </div>
                <div className='qwrapper'>
                    <p className='question'>What should I do right before my lesson?</p>
                    <p className='infodiv'>
                      <p className='info'>
                        Try to schedule an hour of free time right before your lesson so that you have time to get to Bienen, warm-up, prepare yourself mentally, snack (if needed), and take a bathroom break. </p>
                      <p className='info'>It may sound silly, but these small things will help maximize the productivity of your lesson.
                      </p>
                      <p className='info'>
                        <FaRegStar/> Arrive to your lesson 5 minutes in advance.  (You can wait outside Dr. W's door, but there's also a sitting area at the end of the hallway if you prefer.) </p>
                      <p className='info'> When it's time for your lesson, Dr. Wang will let you in.
                      </p> 
                      
                        
                    </p>

                </div>
              </div>
            </div>
    </div>
    </>
    
  )
}

export default Lessons
