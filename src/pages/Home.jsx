import React from "react";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Projects from "../components/Home/Projects";
import Experience from "../components/Home/Experience";
import CertificatesSection from "../components/Home/CertificatesSection";
import Footer from "../components/Global/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <CertificatesSection />
      <Footer />
    </>
  );
};

export default Home;
