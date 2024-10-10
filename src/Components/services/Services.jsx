import React from "react";
import "./services.css";
import Image1 from "../../assets/luffy.jpg";
const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsu dolor sit amet conscteturer adipsicing elit aennean commodo ligula eget",
  },
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsu dolor sit amet conscteturer adipsicing elit aennean commodo ligula eget",
  },
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsu dolor sit amet conscteturer adipsicing elit aennean commodo ligula eget",
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
