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
      <p>Hello there! My name is Jayce Ese and I am a self-taught Front-End Developer as well as a full-time stay-at-home dad to my wonderful two-year-old daughter. Although I may joke that she's sometimes a "gremlin," she truly is a joy to be around most of the time lol</p>
      <p>Over the last couple years, I've dedicated myself to mastering the art of web development, with a particular focus on HTML5, CSS3, JavaScript, and React. Through personal projects and online courses, I've built a strong foundation of knowledge that I'm excited to apply in a Front-End Developer role.</p>
      <p>Prior to my foray into web development, I gained valuable experience in communication and collaboration skills through various customer service and sales roles.</p>
      <p>When I'm not tinkering with code or spending time with my family, you can find me enjoying my favorite sports, playing video games, or indulging in my love for anime. I'm passionate about learning, and I believe that every experience has something to teach us.</p>
    </div>
    </div>
  )
}

export default About
