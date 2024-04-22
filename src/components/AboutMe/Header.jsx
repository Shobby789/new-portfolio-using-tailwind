import React from "react";
import { styles } from "../../styles/styles";

const Header = () => {
  return (
    <div
      id="portfolio-header"
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <h6 className="text-2xl font-bold">About Me</h6>
      <h1 className="text-4xl md:text-7xl font-bold">
        Hey I am Shoaib Muhammad
      </h1>
      <p className={`${styles.secondaryText} font-normal text-lg`}>
        I'm a <span className={`font-bold`}>MERN Stack Developer</span> building
        the Front-end and Back-end of Websites and Web Applications that leads
        to the success of the overall product. Check out some of my work in the
        Projects section. Currently I'm working as a full time{" "}
        <span className={`font-bold`}>Web Developer</span> at{" "}
        <span className={`font-bold`}>LaunchBox Pakistan. </span>
        I'm open to <span className={` font-bold`}>Job</span> opportunities
        where I can contribute, learn and grow. If you have a good opportunity
        that matches my skills and experience then don't hesitate to{" "}
        <span className={`font-bold`}>Contact me.</span>
      </p>
    </div>
  );
};

export default Header;
