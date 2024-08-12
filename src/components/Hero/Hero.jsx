import React from "react";
import "./Hero.css";
import react_icon from "../../img/react-js-icon.png";
import js_icon from "../../img/js-icon.png";
import html_icon from "../../img/html-icon.png";
import css_icon from "../../img/css-icon.png";
import boy from "../../img/boy.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experiences That Insipire</h2>
          <p>
            Passionate Web Devloper | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img className="react-icon" src={react_icon} alt="tech-img" />
            </div>
            <img src={boy} alt="hero-img" />
          </div>

          <div>
            <div className="tech-icon">
              <img src={html_icon} alt="tech-icons-img1" />
            </div>
            <div className="tech-icon">
              <img src={css_icon} alt="tech-icons-img2" />
            </div>
            <div className="tech-icon">
              <img src={js_icon} alt="tech-icons-img3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
