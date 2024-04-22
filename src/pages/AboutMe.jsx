import React from "react";
import Header from "../components/AboutMe/Header";
import Services from "../components/AboutMe/Services";
import Experience from "../components/AboutMe/Experience";
import Education from "../components/AboutMe/Education";
import Skills from "../components/AboutMe/Skills";

const AboutMe = () => {
  return (
    <>
      <Header />
      <Skills />
      <Services />
      <Experience />
      <Education />
    </>
  );
};

export default AboutMe;

// about me [image, text]
// services
// experience
// education
// skills
