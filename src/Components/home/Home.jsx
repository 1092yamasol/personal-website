import React from "react";
import "./home.css";
import Me from "../../assets/antsh.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Me}
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          alt=""
          className="home__img"
        />
        <h1 className="home__name"> Anteneh Wudneh</h1>
        <span className="home__education">Full Stack Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}

export default Home;
