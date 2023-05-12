import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Header.css";
import HomeIcon from "../../Images/HomeIcon.svg";
import { CodeOff } from "@styled-icons/material/CodeOff";
import { NotepadPerson as AboutIcon } from "@styled-icons/fluentui-system-regular/NotepadPerson";
import { Keyboard } from "@styled-icons/bootstrap/Keyboard";
import { Menu2 } from "@styled-icons/evaicons-solid/Menu2";

const MenuSection = styled.article`
  transform: ${(props) =>
    !props.menuClicked ? "rotate(0deg)" : "rotate(45deg)"};
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
        <section
          style={{
            display: !mClicked ? "none" : "flex",
            flexFlow: "column wrap",
            width: "auto",
            marginTop: 102,
            backgroundColor: "rgb(76 46 52 / 100%)",
            color: "white",
            zIndex: 100,
            position: "absolute",
            fontSize: "2em",
            padding: "1em",
            borderRadius: 7,
            // transform: "rotate(-45deg)",
          }}
        >
          <span
            onClick={() => handleClick("skills-section")}
            className="nav-link"
            style={{ cursor: "pointer", zIndex: 101 }}
          >
            Skills
          </span>
          <span>About</span>
          <span>Contact</span>
        </section>
      );
    }

    console.log(`Menu320To768> mClicked: ${mClicked}`);
    return (
      // <section></section>
      <MenuSection
        style={{ cursor: "pointer", zIndex: 10 }}
        id="m-section"
        onClick={() => {
          !mClicked ? setmClicked(true) : setmClicked(false);
        }}
        menuClicked={mClicked}
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
          <span id="cor">cor</span>
          <br />
          <span id="bitt">bitt</span>
        </section>
        <section>
          {screenWidth ? (
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
