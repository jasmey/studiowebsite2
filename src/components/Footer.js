import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our mailing list to receive emails about upcoming recitals!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Who are we?</Link>
            <Link to='/'>Current Students</Link>
            <Link to='/'>Alumni</Link>
            <Link to='/'>Dr. Wang</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Website Issues</Link>
            <Link to='/'>Contact Dr. Wang</Link>
            <Link to='/'>Contact Webmaster</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Previous Recitals</Link>
            <Link to='/'>Alumni Youtube Profiles</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/pianobienen.nu/'>Instagram</Link>
            <Link to='https://www.facebook.com/share/HJjLKNgGMXGfz2xZ/'>Facebook</Link>
            <Link to='https://www.youtube.com/channel/UCKQShOc8kIVm4EciB0kSO7A'>Youtube</Link>
          
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Dr. Wang's Piano Studio
            </Link>
          </div>
          <small class='website-rights'>Jasmine Meyer © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/share/HJjLKNgGMXGfz2xZ/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/pianobienen.nu/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCKQShOc8kIVm4EciB0kSO7A'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;