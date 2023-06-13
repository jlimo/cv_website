import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/Islands'>Islands</Link>
                    <Link to='/travel'>Travel</Link>
                    <Link to='/Food'>Food</Link>
                    <Link to='/Adventure'>Adventure</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link className='social-logo'>
                        CV <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <div className='social-icons'>
                    <Link className='social-icon-link-facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                    <i className='fab fa-facebook-f' />
                    </Link>
                    <Link className='social-icon-link-instagram'
                    to='/'
                    target='_blank'
                    aria-label='instagram'>
                    <i className='fab fa-instagram' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer