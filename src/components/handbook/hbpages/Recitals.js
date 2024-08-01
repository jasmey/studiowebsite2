import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './hbpages.css'

const Recitals = () => {
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
        <h1 className='header'>recitals</h1>
        <div className='button_wrapper'>
            <button className='button_invalid' onClick={handlePrevious} disabled={currentPageIndex === 0}>
            Previous
            </button>
            <button onClick={handleNext} disabled={currentPageIndex === pages.length - 1}>
            Next
            </button>
        </div>
        <div className='scrollable_container'>
            <div className='qwrapper'>
                <p className='question'>How do I schedule a recital?</p>
                <div className='infodiv'>
                    <p className='info'>
                        Recitals in Bienen are 100% self-planned (of course, you can ask friends for help organizing it, but initiating the event and sorting out big details are all up to you).</p>
                    <p className='info'>
                        First, set a date and location for your recital (and make sure to clear it with Dr. Wang first!). 
                    </p>
                    <p className='subinfo'>If you are a senior, junior, or grad student, a special email will be sent out at the end of quarters, applicable to recitals planned for the following quarter. Galvin is reserved for senior recitals only, and using this form for degree recitals ensures you can get the hall you want before the hall becomes open for general reservations.</p>
                    <p className='info'>
                        If you're not a senior/junior/graduate student (i.e. not planning a degree recital), you can go to this link: <a href="https://25live.collegenet.com/pro/northwestern#!/home/dash" id="linkdoc"> Northwestern Room and Events System </a> to find out which halls are available at what time. 
                    </p>
                    <p className='subinfo'>Type in "BSM" in the location search bar to find a list of all Bienen halls you can reserve! You can find more information on how to sign up for rehearsal spaces and concert venues here: <a href="https://music.northwestern.edu/resources/students/venue-access" id="linkdoc"> https://music.northwestern.edu/resources/students/venue-access</a> .</p>
                    <p className='info'>
                        <strong>TIP:</strong> Spring quarter is the most popular quarter for degree recitals and is challenging to secure a reservation for any hall. If you can help it, try to schedule your recital earlier in the year!
                    </p>
                </div>
            </div>      
            <div className='qwrapper'>
                <p className='question'>I want to schedule a non-degree recital.
                </p>
                <div className='infodiv'>
                    <p className='info'>
                            Follow the above steps for scheduling a recital (go to 25live.collegenet.com), but when you're requesting the hall, instead of saying that it's a recital, tell them it's a "recording"! Technically, you will be recording your recital. 
                    </p>
                    <p className='subinfo'>
                            <strong>NOTE:</strong> because the Concert Management Office doesn't know it's actually a recital, you'll have to ask friends to help you set up and staff your recital (i.e. a friend to help press "record" on your phone when you start playing, a friend to help arrange your refreshments table), because the Office won't be supplying you with Concerts at Bienen staff.
                </p>
                </div>
            </div>
            <div className='qwrapper'>
                <p className='question'>Recital Checklist</p>
                <div className='infodiv'>
                    <ul className='bullets'>
                        <li>Find times for the dress rehearsal and recital, ask Dr. Wang if she is available, then reserve the same hall for the dress rehearsal and performance. </li>
                        <li>Invite all of your friends and family.</li>
                        <li>Coordinate with any accompaniment musicians at least 2 months in advance and inform them of all rehearsal/dress rehearsal/call times.</li>
                        <li>Find a page turner if necessary.</li>
                        <li>Find friends to help you set up your reception (if you're having one) and be there for you on the big day.</li>
                        <li>Design and print out programs. (The Concerts at Bienen Office can do this for you if you'd like to save yourself the trouble.)</li>
                        <li>Before the recital, run through the program in front of your friends to mentally prepare yourself.</li>
                        <li>Make sure you record your recital!</li>
                    </ul>
                    </div>
            </div>
            
            
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Recitals
