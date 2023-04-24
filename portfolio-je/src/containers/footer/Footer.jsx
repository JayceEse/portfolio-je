import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h3>© 2023 - Developed by Jayce Ese</h3>
      </div>
      <div className="footer__nav_container">
        <a href="#home">
          <p className="footer_arrow bounce">
            <FontAwesomeIcon icon={faHandPointUp} />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
