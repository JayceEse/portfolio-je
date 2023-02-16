import React from 'react'
import './about.css'
import aboutPhoto from '../../assets/photoOfJayce.jpeg'

const About = () => {
  return (
    <div className='about section__padding' id='about'>
    <div className='about__img_container'>
      <img src={aboutPhoto} alt="Photo of Jayce" />
    </div>
    <div className='about__content_container'>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam dolorem, laudantium voluptatem ipsum ea doloremque accusamus ratione id delectus quasi mollitia debitis saepe ab possimus provident enim sit nemo.</p>
    </div>
    </div>
  )
}

export default About
