import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);


  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClikc={closeMobileMenu}>
            RIAH<i className="fa-solid fa-cloud"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
             </li>
             <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
                </Link>
             </li>
             <li className='nav-item'>
                <Link to='/Songs' className='nav-links' onClick={closeMobileMenu}>
                Songs
                </Link>
             </li>
            </ul>
            {/* will need changing of buttons later on */}
            {button && <Button buttonStyle='btn--outline'>Songs</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar