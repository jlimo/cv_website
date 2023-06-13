import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
                src="images/img-4.jpg" text="explore cape verde"
                label="explore"
                path="/Islands"/>
            <CardItem
                src="images/Catchupa.jpeg" text="Try out the food"
                label="Eat some local food"
                path="/Food"/>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards