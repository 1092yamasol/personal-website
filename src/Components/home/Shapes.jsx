import React from "react";

function Shapes() {
  return (
    <div className="shapes">
      {/* Filled Triangle */}
      <svg
        width="27"
        height="29"
        className="shape s1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5,0 L27,29 H0 Z" fill="#FFD15C" fillRule="evenodd" />
      </svg>

      {/* Filled Circle */}
      <svg
        width="33"
        height="33"
        className="shape s2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5,0 C25.613,0 33,7.387 33,16.5 C33,25.613 25.613,33 16.5,33 C7.387,33 0,25.613 0,16.5 C0,7.387 7.387,0 16.5,0 Z"
          fill="#FF6F91"
          fillRule="evenodd"
        />
      </svg>
      {/* Half Circle (not filled) */}
      <svg
        width="40"
        height="20"
        className="shape s3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 A20,20 0 0,1 40,20"
          fill="none"
          stroke="#FFC15E"
          strokeWidth="2"
        />
      </svg>
      {/* Filled Square */}
      <svg
        width="28"
        height="28"
        className="shape s4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L28 0 L28 28 L0 28 Z" fill="#6A89FF" fillRule="evenodd" />
      </svg>

      {/* Half Circle (not filled) */}
      <svg
        width="40"
        height="20"
        className="shape s5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 A20,20 0 0,1 40,20"
          fill="none"
          stroke="#FFC15E"
          strokeWidth="2"
        />
      </svg>

      {/* Double Semi-circle (not filled) */}
      <svg
        width="40"
        height="20"
        className="shape s6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 A20,20 0 0,1 40,20"
          fill="none"
          stroke="#8DFFBD"
          strokeWidth="2"
        />
        <path
          d="M5,20 A15,15 0 0,1 35,20"
          fill="none"
          stroke="#8DFFBD"
          strokeWidth="2"
        />
      </svg>

      {/* Triangle (not filled) */}
      <svg
        width="27"
        height="29"
        className="shape s7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5,0 L27,29 H0 Z"
          fill="none"
          stroke="#FF6584"
          strokeWidth="2"
        />
      </svg>

      {/* Ellipse (not filled) */}
      <svg
        width="40"
        height="20"
        className="shape s8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="20"
          cy="10"
          rx="20"
          ry="10"
          fill="none"
          stroke="#FF6584"
          strokeWidth="2"
        />
      </svg>

      {/* Rhombus (not filled) */}
      <svg
        width="28"
        height="28"
        className="shape s9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14,0 L28,14 L14,28 L0,14 Z"
          fill="none"
          stroke="#FF6F91"
          strokeWidth="2"
        />
      </svg>

      {/* Hexagon (not filled) */}
      <svg
        width="34"
        height="30"
        className="shape s10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17,0 L34,10 L34,20 L17,30 L0,20 L0,10 Z"
          fill="none"
          stroke="#FFD15C"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default Shapes;
