import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { NodeJs } from "@styled-icons/fa-brands/NodeJs";
import { Mysql } from "@styled-icons/simple-icons/Mysql";

import frontend from "../../Images/frontendIcon.svg";
import backend from "../../Images/backendIcon.svg";
import database from "../../Images/cloudDatabaseIcon.svg";
import lang from "../../Images/languagesIcon.svg";
import studying from "../../Images/LearningIcon.svg";

/** COMPONENTS */
import SidewaysText from "../SidewaysText/SidewaysText";
import { WrapText } from "styled-icons/material";

/** STYLED COMPONENTS */
const NodeJsIcon = styled(NodeJs)`
  color: green;
`;
const MysqlIcon = styled(Mysql)`
  background: blue;
`;
const Skill_Section = styled.section`
  position: relative;
  display: flex;
  gap: 40px;
`;
const Skill_Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  poition: absolute;
  max-width: 1070px;

  #skill-studying > p {
    width: fit-content;
  }
`;

/** SKILL */
const Skill_Item = styled.section``;
const Skill_Image = styled.img``;
const Skill_Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  margin: 0px;
  display: flex;
  align-items: center;
  letter-spacing: 0.065em;
  text-transform: capitalize;
`;
const Skill_About = styled.p`
  width: auto;
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.065em;

  a {
    text-decoration: none;
  }
`;
/** STYLE OBJECTS */
const skillStyles = {
  display: "flex",
  flexDirection: "column",
  flex: "1 1" /** 1 1 260 */,
  width: "260px",
  height: "277px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "30px 20px 20px",
  zIndex: 2,
  position: "relative",
  border: "1px solid white",
};

function TheSkills() {
  const [reactHover, setReactHover] = useState(false);
  const [backendHover, setBackendHover] = useState(false);
  const [databaseHover, setDatabaseHover] = useState(false);
  const [langHover, setLangHover] = useState(false);
  const [studyHover, setStudyHover] = useState(false);

  useEffect(() => {
    console.log("reactHover", reactHover);
  }, [reactHover]);
  return (
    <Skill_Section id="skill-section">
      <SidewaysText text="The Skills" />
      <Skill_Container id="skill-container">
        <Skill_Item
          id="skill-frontend"
          className="skill transition"
          style={skillStyles}
          onMouseEnter={() => setReactHover(true)}
          onMouseLeave={() => setReactHover(false)}
        >
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Skill_Image src={frontend} />
            <svg
              className="frontend-svg"
              width="60"
              height="56"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.5645 0.00319662C31.7848 -0.0230202 30.9686 0.112914 30.1504 0.378197C28.5139 0.908763 26.799 1.94271 25.0391 3.37429C24.3494 3.93533 23.6534 4.57665 22.9551 5.2571C22.2722 4.59393 21.5905 3.96982 20.916 3.42117C19.1575 1.99073 17.4473 0.956389 15.8145 0.427025C14.1816 -0.10234 12.557 -0.118743 11.2227 0.651634C9.88832 1.42201 9.09038 2.83618 8.73242 4.51492C8.37446 6.19365 8.41389 8.19281 8.77344 10.4309C8.89832 11.2083 9.07644 12.0239 9.2793 12.8548C8.51686 13.0858 7.77644 13.3288 7.08984 13.5969C5.01775 14.4063 3.30321 15.3745 2.05469 16.5266C0.806162 17.6788 0 19.0771 0 20.6126C0 22.148 0.806162 23.5444 2.05469 24.6966C3.30321 25.8487 5.01775 26.8189 7.08984 27.6282C7.82402 27.9149 8.61888 28.1731 9.43945 28.4173C9.1443 29.5201 8.90516 30.5903 8.74219 31.6048C8.38235 33.8447 8.34435 35.8441 8.70312 37.5266C9.0619 39.2092 9.86024 40.6314 11.2012 41.4055C12.5421 42.1797 14.174 42.1607 15.8105 41.6301C17.4471 41.0996 19.16 40.0676 20.9199 38.636C21.6033 38.0801 22.2945 37.446 22.9863 36.7727C23.6818 37.4501 24.3758 38.0872 25.0625 38.6458C26.821 40.0762 28.5332 41.1086 30.166 41.638C31.7988 42.1673 33.4235 42.1837 34.7578 41.4134C36.0921 40.643 36.8881 39.2288 37.2461 37.5501C37.6041 35.8713 37.5646 33.8741 37.2051 31.636C37.0417 30.6188 36.8024 29.545 36.5059 28.4387C37.3535 28.1887 38.1735 27.9235 38.9297 27.6282C41.0018 26.8189 42.7163 25.8487 43.9648 24.6966C45.2134 23.5444 46.0195 22.148 46.0195 20.6126C46.0195 19.0771 45.2134 17.6788 43.9648 16.5266C42.7163 15.3745 41.0018 14.4063 38.9297 13.5969C38.2332 13.3249 37.4815 13.0788 36.707 12.845C36.9115 12.009 37.0931 11.1876 37.2188 10.4055C37.5786 8.16563 37.6166 6.16426 37.2578 4.48171C36.899 2.79917 36.0987 1.37895 34.7578 0.604759C34.0873 0.217667 33.3441 0.0294134 32.5645 0.00319662ZM32.4727 2.03835C32.9619 2.05173 33.3793 2.16816 33.7363 2.37429C34.4504 2.78655 34.9782 3.58891 35.2598 4.90945C35.5413 6.22998 35.5316 8.01415 35.1992 10.0833C35.0854 10.7917 34.9202 11.5425 34.7324 12.3118C32.6869 11.8195 30.4455 11.4542 28.0566 11.2395C26.8574 9.57815 25.6252 8.0646 24.3828 6.72195C25.0399 6.08048 25.6928 5.48055 26.3301 4.96218C27.9558 3.63975 29.4949 2.73992 30.7793 2.32351C31.4215 2.1153 31.9834 2.02497 32.4727 2.03835ZM13.4961 2.04421C13.9882 2.03048 14.5513 2.12056 15.1953 2.32937C16.4834 2.74698 18.0252 3.64642 19.6523 4.96999C20.2768 5.47796 20.9151 6.06647 21.5586 6.69265C20.307 8.04629 19.0646 9.57296 17.8574 11.2493C15.4787 11.4679 13.2464 11.8352 11.2109 12.3294C11.0246 11.5644 10.8593 10.8174 10.7461 10.1126C10.4134 8.04165 10.4051 6.25723 10.6875 4.93288C10.9699 3.60854 11.502 2.80012 12.2227 2.38406C12.583 2.17602 13.004 2.05795 13.4961 2.04421ZM22.9863 8.1614C23.8009 9.04789 24.6157 10.018 25.4238 11.0618C24.6298 11.0287 23.8261 11.0091 23.0098 11.0091C22.1772 11.0091 21.3582 11.0293 20.5488 11.0637C21.3571 10.0191 22.1715 9.04856 22.9863 8.1614ZM23.0098 13.0286C24.3697 13.0286 25.6951 13.0845 26.9844 13.179C27.8715 14.4531 28.7384 15.8049 29.5645 17.2356C30.2903 18.4928 30.9471 19.748 31.5449 20.9876C30.9408 22.2436 30.2729 23.5158 29.5371 24.7903C28.8894 25.9122 28.213 26.9778 27.5254 28.0051C26.0691 28.1269 24.5601 28.1946 23.0098 28.1946C21.4221 28.1946 19.8792 28.1229 18.3906 27.9954C17.7145 26.9828 17.0495 25.9334 16.4121 24.8294C15.678 23.5578 15.0133 22.2879 14.4102 21.0344C15.0159 19.7739 15.6835 18.497 16.4219 17.218C17.2436 15.7948 18.108 14.4509 18.9902 13.1829C20.2934 13.0862 21.6342 13.0286 23.0098 13.0286ZM29.5586 13.429C31.2071 13.6347 32.7548 13.9202 34.1953 14.263C33.7679 15.6641 33.2414 17.1276 32.6035 18.638C32.1893 17.8395 31.7604 17.0384 31.2969 16.2356C30.7352 15.2627 30.1502 14.3352 29.5586 13.429ZM16.3535 13.4446C15.7744 14.3339 15.2046 15.2434 14.6543 16.1966C14.1849 17.0096 13.747 17.8216 13.3281 18.6301C12.6957 17.1289 12.1724 15.6737 11.748 14.2805C13.1778 13.9372 14.7165 13.6526 16.3535 13.4446ZM36.1738 14.7942C36.8827 15.0087 37.5673 15.2325 38.1953 15.4778C40.1055 16.2239 41.6164 17.1073 42.5957 18.011C43.575 18.9147 44 19.7765 44 20.6126C44 21.4486 43.575 22.3104 42.5957 23.2141C41.6164 24.1178 40.1055 25.0013 38.1953 25.7473C37.4975 26.0199 36.7307 26.2671 35.9336 26.5012C35.365 24.7425 34.6392 22.9076 33.7754 21.0344C34.7686 18.8839 35.5709 16.7871 36.1738 14.7942ZM9.8125 14.804C10.4086 16.777 11.2006 18.8529 12.1797 20.9817C11.3102 22.8658 10.5809 24.7111 10.0098 26.4798C9.24073 26.2517 8.49998 26.0113 7.82422 25.7473C5.91407 25.0013 4.40312 24.1178 3.42383 23.2141C2.44454 22.3104 2.01953 21.4486 2.01953 20.6126C2.01953 19.7765 2.44454 18.9147 3.42383 18.011C4.40312 17.1073 5.91407 16.2239 7.82422 15.4778C8.44254 15.2363 9.11568 15.0157 9.8125 14.804ZM23.0098 16.0188C20.2602 16.0188 18.0098 18.2692 18.0098 21.0188C18.0098 23.7684 20.2602 26.0188 23.0098 26.0188C25.7593 26.0188 28.0098 23.7684 28.0098 21.0188C28.0098 18.2692 25.7593 16.0188 23.0098 16.0188ZM13.3516 23.3841C13.7723 24.1967 14.2098 25.0121 14.6816 25.8294C15.0508 26.4688 15.4278 27.0912 15.8105 27.7024C14.4676 27.5162 13.191 27.2804 11.9922 27.0012C12.3734 25.8336 12.8295 24.6216 13.3516 23.3841ZM32.6289 23.3841C33.153 24.6245 33.6094 25.8385 33.9922 27.0091C32.7896 27.2879 31.5091 27.5229 30.1621 27.7083C30.5498 27.0896 30.9327 26.4594 31.3066 25.8118C31.775 25.0005 32.2108 24.1907 32.6289 23.3841ZM11.416 28.9426C13.2258 29.3714 15.1875 29.7007 17.2676 29.9153C18.6561 31.9237 20.1027 33.7283 21.5586 35.3059C20.9076 35.9407 20.2623 36.5364 19.6309 37.0501C18.0051 38.3725 16.4641 39.2704 15.1797 39.6868C13.8953 40.1032 12.9367 40.0483 12.2227 39.636C11.5086 39.2237 10.9828 38.4214 10.7012 37.1009C10.4196 35.7803 10.4274 33.9981 10.7598 31.929C10.9106 30.9903 11.1359 29.9852 11.416 28.9426ZM34.5703 28.9505C34.8528 29.9994 35.0788 31.0082 35.2305 31.9524C35.5632 34.0233 35.5715 35.8078 35.2891 37.1321C35.0067 38.4564 34.4785 39.2668 33.7578 39.6829C33.0372 40.099 32.0694 40.1532 30.7812 39.7356C29.4931 39.318 27.9513 38.4186 26.3242 37.095C25.6882 36.5776 25.0385 35.9771 24.3828 35.3372C25.8484 33.7534 27.3052 31.9396 28.7031 29.9192C30.7885 29.7061 32.7556 29.3787 34.5703 28.9505ZM19.877 30.1204C20.9037 30.1763 21.944 30.2141 23.0098 30.2141C24.0403 30.2141 25.0468 30.1786 26.041 30.1262C25.0247 31.4974 23.9888 32.744 22.957 33.8665C21.9259 32.7416 20.8919 31.4928 19.877 30.1204Z"
                fill="#008080"
              />
            </svg>
          </section>

          <Skill_Title>front-end development</Skill_Title>
          <Skill_About>
            Creating user interface's with Figma and building with React. From
            design to a full blown web site.
          </Skill_About>
        </Skill_Item>

        <Skill_Item
          className="skill transition"
          id="skill-backend"
          style={skillStyles}
          onMouseEnter={() => setBackendHover(true)}
          onMouseLeave={() => setBackendHover(false)}
        >
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Skill_Image src={backend} />
            <NodeJsIcon className="icon" id="nodejs-icon" />
          </section>

          <Skill_Title>back-end development</Skill_Title>
          <Skill_About>
            Building API's and Endpoints for data to be processed and stored for
            latter use.
          </Skill_About>
        </Skill_Item>

        <Skill_Item
          className="skill transition"
          id="skill-database"
          style={skillStyles}
          onMouseEnter={() => setDatabaseHover(true)}
          onMouseLeave={() => setDatabaseHover(false)}
        >
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Skill_Image src={database} />
            <p className="icon flex_center_column" id="sql-nosql">
              <span>SQL</span>
              <span>NoSQL</span>
            </p>
          </section>
          <Skill_Title>Database management</Skill_Title>
          <Skill_About>
            Creating, updating, deleting and querying data to be retrieved by
            the user or for business analytics.
          </Skill_About>
        </Skill_Item>

        <Skill_Item
          className="skill transition min-width-lang"
          id="skill-languages"
          style={skillStyles}
          onMouseEnter={() => setLangHover(true)}
          onMouseLeave={() => setLangHover(false)}
        >
          <Skill_Image className="icon" src={lang} />
          <Skill_Title>languages</Skill_Title>
          <Skill_About>
            JavaScript <span class="hi-light">Most Proficient</span> <br />
            C++ <span class="hi-light">Novice</span>
          </Skill_About>
        </Skill_Item>

        {/* <Skill_Item
          className="skill transition min-width-studying"
          id="skill-studying"
          style={skillStyles}
          onMouseEnter={() => setStudyHover(true)}
          onMouseLeave={() => setStudyHover(false)}
        >
          <Skill_Image
            className="icon"
            src={studying}
            style={{ marginLeft: "-10px" }}
          />
          <Skill_Title>studying</Skill_Title>
          <Skill_About>
            👍🏾 Google's <span class="hi-light">API Developer Course</span>{" "}
            <br />
            👍🏾 JavaScript Data Structures and Algorithms -{" "}
            <span class="hi-light">Sammie Bae</span>
            <br />
            👍🏾 C++ A Beginners Guide -{" "}
            <span class="hi-light">Herbert Schildt</span>
          </Skill_About>
        </Skill_Item> */}

        <Skill_Item
          className="skill transition min-width-studying"
          id="skill-studying"
          style={skillStyles}
          onMouseEnter={() => setStudyHover(true)}
          onMouseLeave={() => setStudyHover(false)}
        >
          <Skill_Image
            className="icon"
            src={studying}
            style={{ marginLeft: "-10px" }}
          />
          <Skill_Title>Certificates/Credentials</Skill_Title>
          <Skill_About>
            👍🏾 {"  "}{" "}
            <span>
              <a
                href="https://www.linkedin.com/learning/certificates/0bb6f79fff0f01287bae51205282b4d6e8903a9b65f796faac358c5e7836a6d2?trk=backfilled_certificate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Getting started with C++
              </a>
              <i class="hi-light"> - LinkedIn</i>
            </span>
            <br />
            👍🏾 {"  "}
            <span>
              <a
                href="https://www.linkedin.com/learning/certificates/1bd1b7b316e8275f31869eb9980eb9204e0acd9d4d586fcdc5a4416d81b01e9e?trk=backfilled_certificate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Become a Node.js Developer
              </a>
              <i class="hi-light"> - LinkedIn</i>
            </span>
            <br />
            👍🏾 {"  "}
            <span>
              <a
                href="https://www.linkedin.com/learning/certificates/1658b9b135b8dcda1e0964e85512a9905779738c0e03ff530e02a4071537a668?trk=backfilled_certificate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Become a Back-End Web Developer
              </a>
              <i class="hi-light"> - LinkedIn</i>
            </span>
            <br />
            👍🏾 {"  "}
            <span>
              <a
                href="https://www.linkedin.com/learning/certificates/95e7dc527f3048ab1a642579be4b4d60030d1e0b711a780df44d8667207575b8?trk=backfilled_certificate"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                Building RESTful APIs with Node.js and Express
              </a>
              <i class="hi-light"> - LinkedIn</i>
            </span>
            <br />
          </Skill_About>
        </Skill_Item>
      </Skill_Container>
    </Skill_Section>
  );
}

export default TheSkills;
