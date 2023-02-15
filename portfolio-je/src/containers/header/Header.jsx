import React from 'react'
import './header.css'
import cartoonMe from '../../assets/cartoonMe.png'

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header__content-container'>
      <h1>Hello, I'm Jayce Ese</h1>
        <p>I'm a Front-End Developer</p>
      </div>
      <div className='header__img-container'>
        <img src={cartoonMe} alt="Cartoon image" />
      </div>
    </div>
  )
}

export default Header