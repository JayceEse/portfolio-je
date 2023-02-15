import React, {useState} from 'react';
import{RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import'./navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links_logo'>
          <h1>Jayce Ese</h1>
        </div>
        <div className='navbar__links_container'>
          <Menu />
        </div>
        <div className='navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='navbar__links_container-menu_container scale-up-hor-right'>
              <div className='navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar