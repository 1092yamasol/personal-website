import React from "react";
import "./about.css";
import Image from "../../assets/antsh.jpg";
import AboutBox from "./AboutBox";
function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Full-Stack Developer | React, Node.js, Tailwind CSS Expert |
              Custom Solutions <br /> As a highly skilled full-stack developer,
              I specialize in building dynamic, user-centric web applications.
              With expertise in React, Node.js, and Tailwind CSS, I deliver
              responsive and scalable solutions that meet the unique needs of
              each client. My passion for clean code, efficient performance, and
              intuitive design drives me to create seamless user experiences and
              robust back-end architectures.
            </p>
            <a
              href="/Anteneh-CV.pdf"
              className="btn"
              download="Anteneh-Wudneh-CV.pdf"
            >
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage development "></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage material__ui"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage php"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number  ">80%</span>
              </div>
              <div className="skills__bar ">
                <span className="skills__percentage ui__design "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
}

export default About;
