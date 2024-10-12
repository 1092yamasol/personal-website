import React from "react";
function AboutBox() {
  return (
    <div>
      <div className="about__boxes grid">
        <div className="about__box">
          <i className="about__icon icon-fire "></i>
          <div>
            <h3 className="about__title">6</h3>
            <span className="about__subtitile">Project completed</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-people "></i>
          <div>
            <h3 className="about__title">20</h3>
            <span className="about__subtitile">Satsfied Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
