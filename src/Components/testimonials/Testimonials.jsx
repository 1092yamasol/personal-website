import React from "react";
import "./testimonials.css";
import { title } from "framer-motion/client";
import Image1 from "../../assets/dagi.jpg";
import Image2 from "../../assets/mehbuba.jpg";
import Image3 from "../../assets/sol.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Dagem Adugna",
    subtitle: "Former Acting head of Software Engineering at Hagbes",
    comment:
      "Working with you has always been a pleasure. Your dedication and ability to solve complex problems never cease to impress me. Keep up the amazing work! 👍",
  },
  {
    id: 2,
    image: Image2,
    title: "Mehbuba Abera",
    subtitle: "Hagbes Acting head of Software Engineering",
    comment:
      "Your attention to detail and willingness to go the extra mile have made a huge impact on our projects. It's a privilege to collaborate with you. Keep shining! ✨",
  },
  {
    id: 3,
    image: Image3,
    title: "Solomon Yeshiwas",
    subtitle: "Senior Software Engineer",
    comment:
      "You bring a unique perspective and creativity to every task. Your contributions elevate the team and make every project a success. Proud to work alongside you! 🚀",
  },
];

function Testimonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" style={{ borderRadius: "50px" }} />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
