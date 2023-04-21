import React, { useState, useRef, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Icon } from "../index.js";
import "./navbar.css";

//menu componet to be used for normal and toggle menu
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar" id="home">
      <div className="navbar__links">
        <div className="navbar__links_logo">
          <img src={Icon} alt="Photo of Jayce" />
        </div>
        <div className="navbar__links_container">
          <Menu />
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#272341"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#272341"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar__links_container-menu_container scale-up-hor-right">
              <div className="navbar-menu_container-links" ref={menuRef}>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
