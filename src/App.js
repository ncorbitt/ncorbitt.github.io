import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";

import { Outlet } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { ArrowUpSquare } from "@styled-icons/bootstrap/ArrowUpSquare";

function App() {
  return (
    <div className="App">
      <article className="app-container">
        <ArrowUpSquare
          id="arrow-up-square"
          size={48}
          onClick={(e) => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
        <Header />
        <Hero strapline="mern" tod="full stack web developer" />

        <Skills />
        <About />
        <Contact />
        <Footer />
      </article>

      {/* <section>
        <Outlet />
      </section> */}
    </div>
  );
}

export default App;
