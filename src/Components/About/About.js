import React from "react";
import styled from "styled-components";
import Nodes from "../Nodes";

/** COMPONENTS */
import SidewaysText from "../SidewaysText/SidewaysText";

const About_Section = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--main-font-color);
  position: relative;
`;
const About_Container = styled.section`
  width: 90%;
  display: flex;
  flex-flow: column wrap;
`;
const About_Title_Section = styled.section`
  display: flex;
  justify-content: end;
`;
const About_Title_Shadow = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 149px;
  line-height: 190px;
  letter-spacing: 0.065em;
  color: rgba(255, 255, 255, 0.18);
  text-transform: uppercase;
`;
const About_Title = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 78px;
  line-height: 100px;
  letter-spacing: 0.065em;
  color: #ffffff;
  position: relative;
  top: -130px;
  text-transform: lowercase;
`;

const About_Me_Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 40px;

  #about-me-p {
    box-shadow: 14px 14px black;
  }

  #about-me-p:hover {
    box-shadow: 14px 14px 10px black;
  }
`;
const About_Me_P = styled.p`
  max-width: max-content;
  min-width: 700px;
  height: min-content;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.07em;
  background: #4b2e34;
  padding: 2em;
  border: 1px solid white;

  margin-left: 175px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 14px 14px 24px black;
  }
`;

function About() {
  return (
    <About_Section id="about-section">
      {/* <Nodes top={180} left={57} scale="0.5" scaleX={"-1"} /> */}
      <About_Container id="about-container">
        <About_Title_Section
          id="about-title-section"
          className="about-title-section-main"
        >
          <About_Title_Shadow id="about-title-section">
            about
            <About_Title id="about-title">about</About_Title>
          </About_Title_Shadow>
        </About_Title_Section>
        {/* 
        <Nodes
          top={175}
          left={35}
          scale="0.5"
          scaleX={"-1"}
          position={"absolute"}
        /> */}

        <About_Me_Section id="about-me-section">
          <About_Me_P id="about-me-p">
            Dedicated full stack web developer with a{" "}
            <span className="hi-light">passion</span> for building innovative
            and <span className="hi-light">user-friendly</span> web
            applications. Proven ability to work with a variety of technologies,
            including HTML, CSS, <span className="hi-light">JavaScript</span>,
            MySQL, and MongoDB. Strong problem-solving and analytical skills.
            Ability to work independently and as part of a team. <br />
            <br /> I’m also working on getting{" "}
            <span className="hi-light">
              <a
                href="https://www.cloudskillsboost.google/paths/21"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Google’s API Developer Certification
              </a>
            </span>{" "}
            to help businesses migrate to Google Cloud. Google Cloud is a
            powerful platform that can help businesses improve their
            performance, security, and scalability.
          </About_Me_P>

          <SidewaysText text="About me" />
        </About_Me_Section>
      </About_Container>
    </About_Section>
  );
}

export default About;
