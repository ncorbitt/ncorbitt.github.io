import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SidewaysText({ text, top, left, beforeWidth, beforeColor }) {
  const Subject = styled.section`
    width: max-content;
    transform: rotate(270deg);

    min-width: max-content;
    color: ${(props) => (props.beforeColor ? props.beforeColor : "white")};
    position: relative;
    align-self: center;
    top: ${(props) => (props.top ? props.top : 0)}px;
    left: ${(props) => (props.left ? props.left : 0)}px;
    transform: rotate(90deg);
    font-size: 1.5em;
    letter-spacing: 5px;
  `;
  const Subject_Text = styled.span`
    font-weight: bold;
    letter-spacing: 1px;
    width: max-content;
    position: relative;

    &::before {
      content: "";
      width: ${(props) => (props.beforeWidth ? props.beforeWidth : 100)}%;
      height: 3px;
      position: absolute;
      top: 13px;
      left: calc(
        -${(props) => (props.beforeWidth ? props.beforeWidth : 100)}% - 20px
      );
      background-color: white;
    }

    &::after {
      content: "";
      width: ${(props) => (props.beforeWidth ? props.beforeWidth : 100)}%;
      height: 3px;
      position: absolute;
      top: 13px;
      left: calc(100% + 20px);
      background-color: white;
    }
  `;

  return (
    <Subject
      id="sideways-subject"
      top={top && top}
      left={left && left}
      beforeColor={beforeColor && beforeColor}
    >
      <Subject_Text id="sideways-text" beforeWidth={beforeWidth && beforeWidth}>
        {text}
      </Subject_Text>
    </Subject>
  );
}

export default SidewaysText;
