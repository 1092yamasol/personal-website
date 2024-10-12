import React from "react";
import "./services.css";
import Image1 from "../../assets/React.jpg";
import Image3 from "../../assets/nodejs.jpg";
import Image2 from "../../assets/uiux.jpg";
const data = [
  {
    id: 1,
    image: Image1,
    title: "React Development",
    description:
      "Build dynamic, responsive, and high-performing web applications with React, a modern JavaScript library. Specializing in creating seamless user experiences with efficient code, I can help you take your web project to the next level.",
  },
  {
    id: 2,
    image: Image3,
    title: "Node.js Development",
    description:
      "Harness the power of Node.js for building fast, scalable server-side applications. I specialize in creating real-time, data-intensive applications with an emphasis on efficiency and performance, helping you build reliable back-end systems for your projects.",
  },
  {
    id: 3,
    image: Image2,
    title: "UI/UX Design",
    description:
      "Deliver intuitive and engaging user experiences through thoughtful UI/UX design. From wireframes to final prototypes, I create visually appealing and user-friendly designs that align with your brand and enhance customer satisfaction.",
  },
];

function Services() {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
