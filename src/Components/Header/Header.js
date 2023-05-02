import React from "react";
import "./Header.css";
import HomeIcon from "../../Images/HomeIcon.svg";

function Header() {
  return (
    <header>
      <article className="h-container">
        <section className="name-logo">
          <span id="cor">cor</span>
          <br />
          <span id="bitt">bitt</span>
        </section>
        <section className="nav">
          <nav>
            <span className="nav-link">
              <img src={HomeIcon} alt="Home icons" />
            </span>
            <span className="nav-link">Skills</span>
            <span className="nav-link">About</span>
            <span className="nav-link">Contact</span>
          </nav>
        </section>
      </article>
    </header>
  );
}

export default Header;
