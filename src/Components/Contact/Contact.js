import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sent from "../../Images/Sent.svg";
import "./Contact.css";
import Nodes from "../Nodes";

import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import SidewaysText from "../SidewaysText/SidewaysText";

/** CONTACT */
const Contact_Section = styled.article`
  display: flex;
  width: 100%;
  color: var(--main-font-color);
  position: relative;
`;
const Contact_Container = styled.section`
  width: 90%;
`;
const Contact_Title_Section = styled.section`
  display: flex;
  justify-content: start;
`;
const Contact_Title_Shadow = styled.span`
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
  margin-top: 30px;
`;
const Contact_Title = styled.span`
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
const Contact_Me_Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  // margin: 0% 0% 0% 15%;


  #contact-email {
    background: linear-gradient(89deg,#fff,#89525d,#2b3e58);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  h2:hover {
    background: linear-gradient(89deg,#fff,#89525d,#2b3e58);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  // using radial
  // hr {
  //   background: radial-gradient(#89525d,#2b3e58 123%, transparent);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }

  // h2:hover {
  //   background: linear-gradient(89deg,#fff,#e38d4f,#472426);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }

  // h2 {
    //   background: linear-gradient(89deg,#fff,#89525d,#2b3e58);
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    // }
  
}
`;
const Contact_Form_Section = styled.section``;

/** CONTACT INFO */
const Contact_Info = styled.section``;
const Contact_email = styled.p``;
const Contact_social_media = styled.p``;

/** FORM */
const Form_Section = styled.section``;
const Form_Email = styled.section``;
const Form_Msg = styled.section``;
const Form_Submit_Button = styled.section`
  position: relative;

  input:hover {
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
  }

  #plane-icon {
    position: absolute;
    top: 11px;
    left: 176px;
  }
`;
const Form_Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 600px;
  height: 450px;

  * {
    color: var(--main-font-color);
    font-family: "Rajdhani";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.065em;
    color: rgba(217, 217, 217, 0.5);
  }
`;

const Nates_Details = styled.section`
  position: relative;
`;
const City_State = styled.section``;
const Phone = styled.section``;
const Phone_Container = styled.h2``;
const Phone_Number = styled.a`
  color: var(--main-font-color);
  text-decoration: none;
`;
const Email = styled.section``;
const Email_Address = styled.a`
  color: var(--main-font-color);
  text-decoration: none;
`;
const Email_Container = styled.h2``;
const Socials = styled.section`
  a {
    color: var(--main-font-color);
    position: relative;
    left: -14px;
  }
`;
const Socials_Linkedin = styled.a``;

function Contact() {
  return (
    <Contact_Section id="contact-section">
      {/* <Nodes top={77} left={1300} scale="0.5" scaleX={"1"} /> */}
      <Contact_Container id="contact-container">
        <Contact_Title_Section id="contact-title-section">
          <Contact_Title_Shadow id="contact-title-section">
            contact
            <Contact_Title id="contact-title">contact</Contact_Title>
          </Contact_Title_Shadow>
        </Contact_Title_Section>

        <Contact_Me_Section id="contact-me-section">
          <SidewaysText text={`Nate's Details`} beforeWidth={40} />

          <Nates_Details id="nates-details">
            {""}

            <City_State className="city-state contact-section">
              <span className="contact-strapline">City</span>
              <h2 className="contact-headline">Chandler, AZ</h2>
            </City_State>

            {""}

            <Phone className="phone contact-section">
              <span className="contact-strapline">Phone</span>
              <Phone_Container className="contact-headline">
                <Phone_Number href="tel:7075637056">
                  (707) 563-7056
                </Phone_Number>
              </Phone_Container>
            </Phone>

            {""}

            <Email className="contact-section">
              <span className="contact-strapline">Email</span>
              <Email_Container className="contact-headline" id="contact-email">
                <Email_Address href="mailto:hello@ncorbitt.me">
                  hello@ncorbitt.me
                </Email_Address>
              </Email_Container>
            </Email>

            {""}

            <hr className="contact-section-hr" />

            {""}

            <Socials id="contact-socials">
              <Socials_Linkedin
                onMouseEnter={(e) => {
                  e.target.classList.add("pulse");
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove("pulse");
                }}
                href="https://www.linkedin.com/in/nathan-corbitt/"
              >
                <LinkedinSquare id="LN" size={100} />{" "}
              </Socials_Linkedin>
            </Socials>
          </Nates_Details>
        </Contact_Me_Section>

        {""}
      </Contact_Container>
    </Contact_Section>
  );
}

/**
 *
 * Unit test: within the project -> file.test.js
 * Intergration test: within the project -> __test__/Route.js
 * Functional tests: outside the project & within the project -> __test__/Workflow.js
 * System test:Ouside the project -> Target-loadtest.js
 *
 */

export default Contact;
