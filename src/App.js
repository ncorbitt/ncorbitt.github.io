import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <article className="app-container">
        <Header />
        <Hero
          strapline="mern"
          tod="full stack web developer"
          intro={
            "A passionate full-stack developer with 4 years of experience in web development. Strong ability to develop and deliver high-quality, user-friendly web applications. Strong understanding of front-end and back-end development, as well as database management."
          }
        />

        <Skills />
      </article>

      {/* <section>
        <Outlet />
      </section> */}
    </div>
  );
}

export default App;
