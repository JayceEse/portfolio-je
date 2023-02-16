import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer__container'>
        <h3>Developed by Jayce Ese 2023</h3>
        <div className='footer__navbar_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer