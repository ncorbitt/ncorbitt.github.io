import React from "react";
import styled from "styled-components";

import "./Hero.css";
import DownArrow from "../../Images/DownArrow.svg";
import RightArrow from "../../Images/RightArrow.svg";
import Nodes from "../Nodes";
import SidewaysText from "../SidewaysText/SidewaysText";
import Resume from "../../Resume/resumeForPortfolio.pdf";

const Hero_Section = styled.article`
  position: relative;
  top: 0px;
  width: 100%;
  font-family: Bruno Ace;
`;
const Hero_Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8%;
`;
const Left_Side_Arrow = styled.img`
  position: absolute;
  top: 103px;
  left: -210px;

  &:hover {
    cursor: pointer;
  }
`;
const Web_Dev_Intro = styled.section`
  color: var(--main-font-color);
  //height: 352px;
  position: sticky;
  display: flex;
  flex-flow: column wrap;
`;
const Strapline = styled.span`
  position: relative;
  top: 22px;
  width: 72px;
  height: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 159.5%;
  display: flex;
  align-items: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  flex: 1 1 auto;
`;
const Type_of_Developer = styled.span`
  position: relative;
  //left: -5px;
  //height: 125px;

  font-style: normal;
  font-weight: 700;
  font-size: 3.4375em;
  line-height: 100px;
  display: flex;
  align-items: center;
  letter-spacing: 0.065em;
  margin: 0;
  margin-bottom: 25px;
  text-transform: capitalize;

  flex: 1 1 auto;
`;
const Intro = styled.section`
  position: relative;
  top: -30px;
  max-width: 68%;
  //height: 96px;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 159.5%;
  letter-spacing: 0.07em;

  flex: 1 1 auto;
`;
const More_About_Me = styled.span`
  display: flex;
  flex-flow: row wrap;
  position: relative;

  margin: 0;
  margin-top: 20px;
`;
const More_About_Me_Button = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  font-size: 18px;
  position: relative;
  width: 195px;
  height: 70px;

  background-color: var(--drk-hi-light);
  box-shadow: 0px 0px 10px #ff6c8a;

  border-radius: 3px;
  margin-right: 70px;
  cursor: pointer;

  // &:hover {
  //   box-shadow: 14px 14px 14px white;
  //   border: 1px solid white;
  // }
`;
const More_About_Me_Right_Arrow_Img = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

function Hero({ strapline, tod, intro }) {
  return (
    <Hero_Section id="hero">
      <Hero_Container id="hero_container">
        <SidewaysText text="Hello and Welcome" beforeWidth={40} />
        <Web_Dev_Intro id="web-dev-intro">
          <Strapline id="strapline">{strapline}</Strapline>
          <Type_of_Developer id="type-of-dev">{tod}</Type_of_Developer>
          <Intro className="intro" id="intro">
            A <span className="hi-light">passionate</span> full-stack developer
            with <span className="hi-light">6 years</span> of experience in web
            development. <span className="hi-light">Strong</span> ability to
            develop and <span className="hi-light">deliver</span> high-quality,
            user-friendly <span className="hi-light">web applications</span>. A
            Solid understanding of front-end and back-end development, as well
            as database management.
          </Intro>

          <More_About_Me id="more-about-me">
            <More_About_Me_Button
              className="pls transition"
              id="more-about-me-button"
              onCLick
            >
              <a
                href={Resume}
                style={{ color: "inherit", textDecoration: "none" }}
                target={"_blank"}
                rel="noopener noreferrer"
                title="Open resume in new window"
              >
                Resume
              </a>
            </More_About_Me_Button>

            <More_About_Me_Right_Arrow_Img
              id="right-arrow"
              src={RightArrow}
              alt=""
            />
          </More_About_Me>
        </Web_Dev_Intro>

        {/* <Nodes top={0} left={130} scaleX="1" /> */}
      </Hero_Container>
    </Hero_Section>
  );
}

export default Hero;
