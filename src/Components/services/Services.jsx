import React from "react";
import "./services.css";
import ImageReact from "../../assets/React.jpg";
import ImageNode from "../../assets/nodejs.jpg";
import ImageUIUX from "../../assets/uiux.jpg";
import ImagePHP from "../../assets/php.jpg";
const data = [
  {
    id: 1,
    image: ImageReact,
    title: "React Development",
    description:
      "Build dynamic and high-performing web applications with React, specializing in seamless user experiences and efficient code.",
  },
  {
    id: 2,
    image: ImageNode,
    title: "Node.js Development",
    description:
      "Create fast, scalable server-side applications with Node.js, focusing on real-time data and efficient performance.",
  },
  {
    id: 3,
    image: ImagePHP,
    title: "PHP",
    description:
      "Utilize PHP for server-side scripting to develop dynamic web applications and robust backend solutions.",
  },
  {
    id: 4,
    image: ImageUIUX,
    title: "UI/UX Design",
    description:
      "Create intuitive user experiences through thoughtful UI/UX design, from wireframes to prototypes, enhancing brand satisfaction.",
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
