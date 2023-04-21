import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header__content-container">
        <h1>
          Hi, my name is <span className="custom__text_color"> Jayce Ese</span>
          <br />
          I'm a Front End Developer.
        </h1>
        <button>
          <a href="#projects">Explore</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
