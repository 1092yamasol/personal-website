import React from "react";
import Image1 from "../../assets/luffy.jpg";
import "./blog.css";
function Blog() {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="3">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              5 Best App Development Tool for your projects
            </h3>
            <div className="blog__meta">
              <span>09 Feburary,2024</span>
              <span className="blog__dot">.</span>
              <span>Anteneh</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="3">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Common Misconceptions About Payment</h3>
            <div className="blog__meta">
              <span>24 April,2024</span>
              <span className="blog__dot">.</span>
              <span>Anteneh</span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="3">
              <span className="blog__category">Bussiness</span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things to know about startup bussiness
            </h3>
            <div className="blog__meta">
              <span>1 October,2024</span>
              <span className="blog__dot">.</span>
              <span>Anteneh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
