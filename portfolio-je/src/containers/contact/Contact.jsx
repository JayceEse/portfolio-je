import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact___container">
        <h1 data-aos="fade-down">
          <FontAwesomeIcon icon={faHandshake} /> Lets Connect
        </h1>
        <div className="contact__social_links">
          <ul>
            <li data-aos="fade-right" data-aos-delay="500">
              <a href="mailto:jayce.ese@gmail.com ">
                <FontAwesomeIcon icon={faEnvelope} id="gmail" />
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="800">
              <a href="https://www.linkedin.com/in/jayceese" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} id="linkedin" />
              </a>
            </li>
            <li data-aos="fade-right" data-aos-delay="1100">
              <a href="https://github.com/JayceEse" target="_blank">
                <FontAwesomeIcon icon={faGithub} id="github" />
              </a>
            </li>
          </ul>
          <h2 data-aos="fade-left">Click or tap the icons</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
