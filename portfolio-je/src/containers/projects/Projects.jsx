import React from 'react';
import './projects.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faJs, faCss3, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import { GPT3, Pokemon, Portfolio } from '../index.js';

const Projects = () => {
  return (
    <div className='projects section__padding' id='projects'>
      <h1>Projects</h1>
      <div className='projects__container'>
        <div className='projects__content gradient__bg'>
          <img src={GPT3} alt="gpt3 site screenshot" />
          <div className='projects__content_info'>
            <h3>GPT3 Modern Website</h3>
            <div className='projects__content_links'>
              <a href="https://github.com/JayceEse/gpt3_je" target="_blank"><FontAwesomeIcon icon={faGithub} /> Code Here</a>
              <a href="https://jayceese.github.io/gpt3_je/" target="_blank"><FontAwesomeIcon icon={faGlobe} /> Live Link Here</a>
            </div>
            <p>Built a React website to demonstrate my understanding to code a Figma design into a responsive website using React.</p>
            <ul>
              <li><FontAwesomeIcon icon={faReact} id="react"/></li>
              <li><FontAwesomeIcon icon={faJs} id="javascript"/></li>
              <li><FontAwesomeIcon icon={faCss3} id="css"/></li>
            </ul>
          </div>
        </div>
        <div className='projects__content gradient__bg'>
            <img src={Pokemon} alt="pokemon site screenshot" />
            <div className='projects__content_info'>
              <h3>Pokemon Stats API</h3>
              <div className='projects__content_links'>
                <a href="https://github.com/JayceEse/pokemon-stats" target="_blank"><FontAwesomeIcon icon={faGithub} /> Code Here</a>
                <a href="https://jayceese.github.io/pokemon-stats/" target="_blank"><FontAwesomeIcon icon={faGlobe} /> Live Link Here</a>
              </div>
              <p>Created Pokemon Stats to learn how API requests work and add other features to enhance the users experience.</p>
              <ul>
                <li><FontAwesomeIcon icon={faReact} id="react"/></li>
                <li><FontAwesomeIcon icon={faJs} id="javascript"/></li>
                <li><FontAwesomeIcon icon={faCss3} id="css"/></li>
                <li>Pokemon API</li>
              </ul>
            </div>
        </div>
        <div className='projects__content gradient__bg'>
            <img src={Portfolio} alt="portfolio site screenshot" />
            <div className='projects__content_info'>
              <h3>Personal Portfolio Website</h3>
              <div className='projects__content_links'>
                <a href="https://github.com/JayceEse/portfolio-je" target="_blank"><FontAwesomeIcon icon={faGithub} /> Code Here</a>
              </div>
              <p>Created a responsive portfolio website showcasing my web development projects and skills.</p>
              <ul>
                <li><FontAwesomeIcon icon={faReact} id="react"/></li>
                <li><FontAwesomeIcon icon={faJs} id="javascript"/></li>
                <li><FontAwesomeIcon icon={faCss3} id="css"/></li>
                <li>Vite JS</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects