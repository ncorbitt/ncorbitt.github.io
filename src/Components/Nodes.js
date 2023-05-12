import React from "react";
import styled from "styled-components";

const Nodes_Section = styled.section`
  position: relative;
  top: ${(props) => props.top && props.top}px;
  left: ${(props) => props.left && props.left}px;
  transform: scale(${(props) => (!props.scale ? ".7" : props.scale)})
    scaleX(${(props) => (props.scaleX ? props.scaleX : 1)});
  position: ${(props) => (!props.position ? "relative" : props.position)};
`;

const Circle_1 = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 70px;
  height: 70px;
  background: #4c2e34;
  border: 1px solid #d9d9d9;
  border-radius: 100%;
  z-index: 2;
  left: 100px;
  top: 36px;
`;
const Connector_1 = styled.section`
  position: relative;
  left: 14px;
  top: -14px;
  width: 3px;
  height: 272.5px;
  border: 1px solid #d9d9d9;
  z-index: 1;
  transform: rotate(45deg);
`;
const Circle_2 = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 3px solid #4c2e34;
  border-radius: 100%;
  z-index: 2;
  left: -98px;
  top: -73px;
`;
const Connector_2 = styled.section`
  position: relative;
  left: 14px;
  top: -127px;
  width: 3px;
  height: 272.5px;
  border: 1px solid #d9d9d9;
  z-index: 1;
  transform: rotate(-45deg);
`;
const Circle_3 = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border: 3px solid #4c2e34;
  border-radius: 100%;
  z-index: 2;
  left: 95px;
  top: -185px;
`;

function Nodes({ top, left, name, scale, scaleX, position }) {
  return (
    <Nodes_Section
      className={name}
      id="nodes-section"
      top={top && top}
      left={left && left}
      scale={scale && scale}
      scaleX={scaleX && scaleX}
      position={position && position}
    >
      <Circle_1 id="circle-1" />
      <Connector_1 id="connector-1" />
      <Circle_2 id="circle-2" />
      <Connector_2 id="connector-2" />
      <Circle_3 id="circle-3" />
    </Nodes_Section>
  );
}

export default Nodes;
