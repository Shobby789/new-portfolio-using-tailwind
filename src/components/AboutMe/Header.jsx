import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import AnimatedText from "../Global/AnimatedText";

const Header = () => {
  return (
    <section
      id="portfolio-header"
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <AnimatedText direction="left">
        <h6 className="text-xl font-semibold">About Me</h6>
      </AnimatedText>
      <AnimatedText direction="right">
        <h1 className="main-heading">
          <span className={`${styles.secondaryText}`}>Hey</span> I am Shoaib
          Muhammad
        </h1>
      </AnimatedText>
      <AnimatedText direction="left">
        <p className={`font-normal text-lg`}>
          I'm a <span className={`font-semibold`}>MERN Stack Developer</span>{" "}
          building the Front-end and Back-end of Websites and Web Applications
          that leads to the success of the overall product. Check out some of my
          work in the Projects section. Currently I'm working as a full time{" "}
          <span className={`font-semibold`}>Web Developer</span> at{" "}
          <Link
            to="https://launchbox.pk/"
            target="_blank"
            className={`font-semibold`}
          >
            LaunchBox Pakistan.{" "}
          </Link>
          I'm open to <span className={` font-semibold`}>Job</span>{" "}
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to{" "}
          <Link to="/contact" className={`font-semibold`}>
            Contact me.
          </Link>
        </p>
      </AnimatedText>
    </section>
  );
};

export default Header;
