import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Projects from "../components/Home/Projects";
import Experience from "../components/Home/Experience";
import CertificatesSection from "../components/Home/CertificatesSection";

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <CertificatesSection title={"Discover my certificates"} />
    </main>
  );
};

export default Home;
