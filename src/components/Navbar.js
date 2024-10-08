import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const handleCalendarClick = () => {
    window.location.href = 'https://calendar.google.com/calendar/u/3?cid=c3lsdmlhd2FuZ3BpYW5vc3R1ZGlvQGdtYWlsLmNvbQ';
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/nu_logo_white.png" alt="icon" className='nav-item  nu-logo'/>
            WANG STUDIO
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/album'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/handbook'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Handbook
              </Link>
            </li>

            <li>
              <Link
                to='https://calendar.google.com/calendar/u/3?cid=c3lsdmlhd2FuZ3BpYW5vc3R1ZGlvQGdtYWlsLmNvbQ'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={handleCalendarClick}>CALENDAR</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;