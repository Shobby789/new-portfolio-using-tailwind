import React from "react";
import Header from "../components/AboutMe/Header";
import Services from "../components/AboutMe/Services";
import Experience from "../components/AboutMe/Experience";
import Education from "../components/AboutMe/Education";
import Skills from "../components/AboutMe/Skills";
import CertificatesSection from "../components/Home/CertificatesSection";

const AboutMe = () => {
  return (
    <main className="w-full">
      <Header />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <CertificatesSection title={"My Certificates"} />
    </main>
  );
};

export default AboutMe;
