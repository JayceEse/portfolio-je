import React from 'react'
import'./navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h3>Jayce Ese</h3>
      </div>
      <div className='navbar__links_container'>
        <div className='navbar__links_content'>
          <Menu />
        </div>
      </div>
      <div className='navbar__menu'>
        
      </div>
    </div>
  )
}

export default Navbar