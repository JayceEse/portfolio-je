import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { GPT3, Pokemon, Portfolio } from "../index.js";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 data-aos="fade-left">PROJECTS</h1>
      <div className="projects__container">
        <div className="projects__content">
          <div className="projects__img_wrapper">
            <img data-aos="fade-left" src={GPT3} alt="gpt3 site screenshot" />
          </div>
          <div className="projects__content_info" data-aos="fade-right">
            <h3>GPT3 Modern Website</h3>
            <p>
              Learned to build a React website along with CSS3 and JavaScript to
              demonstrate my understanding to code a Figma design into a
              responsive website.
            </p>
            <div className="projects__links">
              <a href="https://github.com/JayceEse/gpt3_je" target="_blank">
                <FontAwesomeIcon icon={faGithub} /> Code Here
              </a>
              <a href="https://jayceese.github.io/gpt3_je/" target="_blank">
                <FontAwesomeIcon icon={faGlobe} /> Live Link Here
              </a>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <div className="projects__img_wrapper">
            <img
              data-aos="fade-left"
              src={Pokemon}
              alt="pokemon site screenshot"
            />
          </div>
          <div className="projects__content_info" data-aos="fade-right">
            <h3>Pokemon Stats API</h3>
            <p>
              Created Pokemon Stats using ReactJS, CSS3, JavaScript & Pokemon
              API to learn how API requests work and how to display the data. As
              well as adding other features like a suggestion drop down menu in
              the search bar to enhance the user’s experience.
            </p>
            <div className="projects__links">
              <a
                href="https://github.com/JayceEse/pokemon-stats"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} /> Code Here
              </a>
              <a
                href="https://jayceese.github.io/pokemon-stats/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGlobe} /> Live Link Here
              </a>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <div className="projects__img_wrapper">
            <img
              data-aos="fade-left"
              src={Portfolio}
              alt="portfolio site screenshot"
            />
          </div>
          <div className="projects__content_info" data-aos="fade-right">
            <h3>Personal Portfolio Website</h3>
            <p>
              Developed a responsive Personal Portfolio website using ReactJS,
              ViteJS, CSS3 and JavaScript to showcase my web development
              projects and skills. Deployed website to Netlify(Site Host) with
              my custom domain name.
            </p>
            <div className="projects__links">
              <a
                href="https://github.com/JayceEse/portfolio-je"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} /> Code Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
