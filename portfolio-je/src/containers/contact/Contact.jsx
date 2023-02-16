import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faHandshake} from '@fortawesome/free-regular-svg-icons';
import './contact.css'

const Contact = () => {
  return (
    <div className='contact section__padding' id='contact'>
      <div className='contact___container'>
        <h1><FontAwesomeIcon icon={faHandshake}/> Lets Connect</h1>
        <div className='contact__social_links'>
          <ul>
            <li><a href="mailto:jayce.ese@gmail.com "><FontAwesomeIcon icon={faEnvelope} id="gmail" /></a></li>
            <li><a href="https://www.linkedin.com/in/jayceese" target="_blank"><FontAwesomeIcon icon={faLinkedin} id="linkedin"/></a></li>
            <li><a href="https://github.com/JayceEse" target="_blank"><FontAwesomeIcon icon={faGithub} id="github"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Contact