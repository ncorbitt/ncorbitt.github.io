import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Header.css";
import HomeIcon from "../../Images/HomeIcon.svg";
import { CodeOff } from "@styled-icons/material/CodeOff";
import { NotepadPerson as AboutIcon } from "@styled-icons/fluentui-system-regular/NotepadPerson";
import { Keyboard } from "@styled-icons/bootstrap/Keyboard";
import { Menu2 } from "@styled-icons/evaicons-solid/Menu2";
import { Close } from "@styled-icons/material/Close";

const MenuSection = styled.article`
  transform: ${(props) =>
    !props.menuClicked ? "rotate(0deg)" : "rotate(45deg)"};
`;

const MenuOverlaySection = styled.section`
  display: ${(props) => (!props.mClicked ? "none" : "flex")};
  font-size: 3.5em;
  flex-flow: column wrap;
  width: 330px;
  height: 300px;

  margin-left: -87px;
  margin-top: 76px;
  align-content: center;
  justify-content: center;

  background-color: #984354;
  color: white;
  border:1px solid white;
  z-index: 100;
  position: absolute;
  font-size: 2em;
  padding: 1em;
  border-radius: 7px;
  transform: rotate(-45deg);

  span {
    margin-bottom: 30px;
  }

  span:hover {
    cursor: pointer;
    padding-left: 7px;
    border-left: 3px solid white;
  }

  @media only screen and (min-width: 320px) {
    & {
      width: 340px;
      margin-left: -81px;
      margin-top: 85px;
    }
  }

  @media only screen and (min-width: 375px) {
    & {
      width: 326px;
      margin-left: -79px;
      margin-top: 107px;
    }
  }

  @media only screen and (min-width: 425px) and (max-width:767px){
    & {
      width: 400px;
      margin-left: -135px;
      margin-top: 104px;
  }
    }
    // & {
    //   width: 358px;
    //   margin-left: -114px;
    //   margin-top: 133px;
    // }
  }
`;

function useOutputWindowResize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    console.log(size);
  }, []);

  /** A function to update the screen size */
  function updateSize() {
    setSize([window.screen.width, window.screen.height]);
  }

  /** Eventlistener - listen for change in screen width */
  window.addEventListener("resize", updateSize);
  window.removeEventListener("reize", updateSize);
  return size;
}

function Header() {
  const iconStyles = {};

  const [mClicked, setmClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  useEffect(() => {
    console.log(`useeffect> %O`, screenWidth);
  }, [screenWidth]);

  window.onresize = setscreenwidth;

  function setscreenwidth() {
    setScreenWidth(window.screen.width);
  }

  function handleClick(section) {
    // about-section
    // contact-section
    // skills-section

    const element = document.getElementById(section);
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function Menu320To768() {
    function MenuOverlay() {
      return (
        <MenuOverlaySection mClicked={mClicked && mClicked}>
          <Close
            size="24"
            style={{ position: "absolute", top: "15px", left: "90%" }}
            onClick={() => setmClicked(false)}
          />

          <span
            onClick={() => handleClick("skills-section")}
            className="nav-link"
          >
            <CodeOff size="40" /> Skills
          </span>
          <span
            onClick={() => handleClick("about-section")}
            className="nav-link"
          >
            <AboutIcon size={40} /> About
          </span>
          <span
            onClick={() => handleClick("contact-section")}
            className="nav-link"
          >
            <Keyboard size="40" /> Contact
          </span>
        </MenuOverlaySection>
      );
    }

    return (
      //
      <MenuSection
        style={{ cursor: "pointer" }}
        id="m-section"
        onClick={() => {
          !mClicked ? setmClicked(true) : setmClicked(false);
        }}
        menuClicked={mClicked} // a styled prop for MenuSelection ,  at top.
      >
        <Menu2 size="48" />
        <MenuOverlay />
      </MenuSection>
    );
  }

  return (
    <header className="nav">
      <article className="h-container">
        <section className="name-logo">
          {/*  */}
          <span id="cor">cor</span>
          <br />
          <span id="bitt">bitt</span>
        </section>

        <section id="menu-section" style={{ zIndex: 90 }}>
          {screenWidth < 768 ? (
            <Menu320To768 />
          ) : (
            <nav>
              <section
                onClick={() => handleClick("skills-section")}
                title="Skills"
                className="nav-link"
              >
                <CodeOff size="40" />
              </section>

              <section
                title="About me"
                onClick={() => handleClick("about-section")}
                className="nav-link"
              >
                <AboutIcon size={40} />
              </section>

              <section
                title="Contact me"
                className="nav-link"
                onClick={() => handleClick("contact-section")}
              >
                <Keyboard size="40" />
              </section>
            </nav>
          )}
        </section>
      </article>
    </header>
  );
}

export default Header;
