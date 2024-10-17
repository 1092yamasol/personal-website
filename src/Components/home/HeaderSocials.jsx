import React from "react";

function HeaderSocials() {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/antsh_alant"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://t.me/antsh_alant"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-telegram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/anteneh-wudneh/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
