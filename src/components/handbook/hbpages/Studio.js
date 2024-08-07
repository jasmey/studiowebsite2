import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './hbpages.css';

const Studio = () => {
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
  

  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkPassword = () => {
    const password = 'key25'; // Set your password here
    const userPassword = prompt('Enter the password, please.');

    if (userPassword === password) {
      setIsAuthorized(true);
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  return (
    <>
    <div className='titlewrapper'>
    <Sidebar/>
        <div className='maintitle'>
            <h1 className='header'>studio</h1>
            <div className='button_wrapper'>
              <button onClick={handlePrevious} disabled={currentPageIndex === 0}>
              Previous
              </button>
              <button onClick={handleNext} disabled={currentPageIndex === pages.length - 1}>
              Next
              </button>
            </div>
            <div className={`scrollable_container ${!isAuthorized ? 'centered' : ''}`}>
            {!isAuthorized ? (
            <button className="signin" onClick={checkPassword}><em>This section's content is for Wang Studio Current Students Only!</em>  <br/><br/> <strong>click to Enter Password.</strong> <br/> <br/><em>(else navigate to a different section to read something else!)</em></button>
        ) : (
          <>
                <div className='qwrapper'>
                    <p className='question'>What is studio class?</p>
                      <div className='infodiv'>
                        <p className='info'>
                          Studio class is a weekly 1.3 hr class mandatory for all performance majors. There, you can get to know your studio better and learn about the different venues in Bienen!
                        </p>
                        <p className='info'>
                          You can easily find out where studio class is happening each week by checking in the studio Messenger chat. If no one's announced anything, just ask.
                        </p>
                        <p className='subinfo'> 
                          Usually it's held in Regenstein Master Class Room (MCR), but a few times a quarter, it'll move to Galvin Recital Hall, the big hall in RCMA famous for its lake view.</p>
                        
                        <p className='info'>
                          Each student is expected to play in studio class at least a couple times each quarter. After you perform, you get to hear constructive feedback from the rest of the studio and Dr. Wang that can help you improve your playing! No sheet music allowed, though - total memorization only! 
                        </p>
                        <p className='subinfo'>Except for really wacky contemporary music.
                        </p>
                      </div>
                </div>
                <div className='qwrapper'>
                    <p className='question'>When do I play in studio class?</p>
                    <p className='infodiv'>
                      <p className='info'>
                        Freshmen will usually play once in the first few weeks of the year to "introduce" themselves to the rest of the studio. After that, when you play in studio class is pretty much up to you!  If you're the type who likes to plan things out long-term, I recommend taking some time in the beginning of the quarter to talk to Dr. Wang to make a game plan with your repertoire wishlist.
                      </p>
                      <p className='info'>
                        Plus, studio class can be SUPER beneficial if you have a recital coming up. If your recital is set to be in Galvin, ask Dr. Wang to play in studio class during one of the weeks we're in Galvin. That way, you can get used to the piano, the acoustics, and the overall feeling of the hall. (Ditto for if your recital is in MCR.)
                      </p>
                        
                    </p>

                </div>
                <div className='qwrapper'>
                    <p className='question'>How does the scheduling process work for Studio Class?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                      When you're nearly ready to perform, you can tell Dr. Wang that you'd like to play in studio class during your lesson. </p>
                      <p className='info'>Once you've signed up to play in studio, if you realize you need more time to prepare (for whatever reason), you can always contact Dr. Wang to let her know and she's usually very understanding.</p>
                    </p>

                </div>
                <div className='qwrapper'>
                    <p className='question'>Is there a dress code?
                    </p>
                    <p className='infodiv'>
                      <p className='info'>
                      Yes! If you're playing that day, you should dress up "nice". Don't show up in ripped clothing or loungewear. An outfit that you would wear to dinner out with your parents. (Same dress code for playing in PIano Forum.)
                    </p>
                    </p>

                </div>
          </>
        )}
              </div>
            </div>
    </div>
    </>
    
  )
}

export default Studio
