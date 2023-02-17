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
            <p>Learned to build a React website along with CSS3 and JavaScript to demonstrate my understanding to code a Figma design into a responsive website.</p>
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
              <p>Created Pokemon Stats using React JS, CSS3, JavaScript & Pokemon API to learn how API requests work and how to display the data. As well as adding other features like a suggestion drop down menu in the search bar to enhance the user’s experience.</p>
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
              <p>Developed a responsive Personal Portfolio website using React JS, Vite JS, CSS3 and JavaScript to showcase my web development projects and skills. Deployed website to Netlify(Site Host) with my custom domain name.</p>
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