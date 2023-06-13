import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

 function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Adventure</h1>
        <p>Places you have never been</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Cape Verde
            </Button> 
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Food <i className='far-fa-play-circle' />
            </Button>        
        </div>
    </div>
  )
}

export default HeroSection;