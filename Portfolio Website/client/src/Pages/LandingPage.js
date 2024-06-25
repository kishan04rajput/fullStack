import React from "react";
import { NavBar } from "../Components/NavBar.js";
import { Home } from "../Components/Home.js";
import { AboutMe } from "../Components/AboutMe.js";
import { Skills } from "../Components/Skills.js";
import { Projects } from "../Components/Projects.js";
import { Testimonials } from "../Components/Testimonials.js";
import { ContactMe } from "../Components/ContactMe.js";
import { Footer } from "../Components/Footer.js";

export const LandingPage = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <home id="Home">
        <Home />
      </home>
      <about id="About">
        <AboutMe />
      </about>
      <skills id="Skills">
        <Skills />
      </skills>
      <projects id="Projects">
        <Projects />
      </projects>
      <testimonials id="Testimonials">
        <Testimonials />
      </testimonials>
      <contactme id="ContactMe">
        <ContactMe />
      </contactme>
      <footer id="Footer">
        <Footer />
      </footer>
    </div>
  );
};
