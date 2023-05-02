import React from "react";
import "./Hero.css";
import DownArrow from "../../Images/DownArrow.svg";
import RightArrow from "../../Images/RightArrow.svg";
import Nodes from "../Nodes";

function Hero({ strapline, tod, intro }) {
  return (
    <section id="hero">
      <Nodes />
      <img id="down-arrow" src={DownArrow} alt="" />
      <section id="hero-section">
        <span id="strapline">{strapline}</span>
        <span id="type-of-dev">{tod}</span>

        <p className="intro" id="intro">
          {intro}
        </p>
        <section id="more-about-me">
          <span id="more-about-me-button">More about me</span>
          <img id="right-arrow" src={RightArrow} alt="" />
        </section>
      </section>
    </section>
  );
}

export default Hero;
