import React, { useState } from "react";
import styled from "styled-components";

import Copy from "../../Images/Copy.svg";

const Footer_Container = styled.section`
  display: flex;
  justify-content: center;
`;
const Footer_Section = styled.section`
  height: 70px;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
`;

const Footer_Copy = styled.p`
  height: 38px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 159.5%;
  color: #ffffff;
  align-self: center;
`;

function Footer() {
  return (
    <Footer_Section id="footer">
      <Footer_Container id="footer-container">
        <Footer_Copy id="footer-copy" style={{ display: "flex" }}>
          <img src={Copy} alt="Copy symbol" style={{ marginRight: 7 }} /> 2023
          <span style={{ textDecoration: "underline", marginLeft: 7 }}>
            Nathan Corbitt
          </span>{" "}
        </Footer_Copy>
      </Footer_Container>
    </Footer_Section>
  );
}

export default Footer;
