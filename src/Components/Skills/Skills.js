import React from "react";
import styled from "styled-components";
import "./Skills.css";
import TheSkills from "./TheSkills";
import Nodes from "../Nodes";

const Skills_Section = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--main-font-color);
  position: relative;
`;
const Skills_Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const Skills_Title_Section = styled.section`
  display: flex;
  justify-content: flex-start;
`;
const Skills_Title_Shadow = styled.span`
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
const Skills_Title = styled.span`
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

function Skills() {
  return (
    <Skills_Section id="skills-section">
      {/* <Nodes left={1300} top={200} scale="0.5" scaleX="1" /> */}
      <Skills_Container id="skills-container">
        <Skills_Title_Section id="skills-title-section">
          <Skills_Title_Shadow id="skills-title-section">
            skills
            <Skills_Title id="skills-title">skills</Skills_Title>
          </Skills_Title_Shadow>
        </Skills_Title_Section>

        <TheSkills />
      </Skills_Container>
    </Skills_Section>
  );
}

export default Skills;
