import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import aboutPhoto from "../../assets/photoOfJayce.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <img
          data-aos="fade-right"
          data-aos-delay="200"
          src={aboutPhoto}
          alt="Jayce at rugby world cup Japan"
          width="768"
          height="1024"
        />
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="about__content_container"
        >
          <h1>About Me</h1>
          <p>
            As an aspiring Front-End Developer, I am passionate about creating
            visually appealing and user-friendly websites that deliver
            exceptional user experiences. I possess a strong foundation in HTML5
            and CSS3 and am continuously enhancing my skills in JavaScript and
            ReactJS to stay ahead of the curve. Drawing from years of experience
            in retail, I have honed my communication and collaboration skills,
            which I believe are essential in delivering successful projects. My
            self-motivation, strong work ethic, and eagerness to learn make me a
            valuable asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
