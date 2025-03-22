import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

const Footer = () => {
  return (
    <footer
      className={`w-full bg-black text-white ${styles.paddingHorizontal} py-8 md:py-16 lg:pt-24 lg:pb-20 flex flex-col gap-y-12`}
    >
      <AnimatedText direction="up">
        <h2 className="uppercase text-3xl md:text-3xl font-medium">
          Have an idea? let's connect
        </h2>
      </AnimatedText>
      <AnimatedText>
        <Link
          className={`text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${styles.secondaryText}`}
          to="mailto:shoaibmuhammad.dev@gmail.com"
        >
          shoaibmuhammad.dev<span className="text-white">@gmail.com</span>
        </Link>
      </AnimatedText>
      <hr />
      <AnimatedText direction="up">
        <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-0 p-0">
          <div className="col-span-12 md:col-span-6 flex items-center justify-start p-0 gap-x-4 md:gap-x-12">
            <Link to="/" className="text-lg font-medium underline">
              Home
            </Link>
            <Link to="/about" className="text-lg font-medium underline">
              About
            </Link>
            <Link to="/projects" className="text-lg font-medium underline">
              Portfolio
            </Link>
            <Link to="/contact" className="text-lg font-medium underline">
              Contact
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center justify-start md:justify-end p-0 gap-x-4 md:gap-x-12">
            <Link to="/" className="text-lg font-medium">
              <FaFacebook className="text-white w-5 h-5" />
            </Link>
            <Link to="/about" className="text-lg font-medium">
              <FaInstagram className="text-white w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="text-lg font-medium">
              <FaLinkedin className="text-white w-5 h-5" />
            </Link>
            <Link to="/contact" className="text-lg font-medium">
              <FaGithub className="text-white w-5 h-5" />
            </Link>
          </div>
        </section>
      </AnimatedText>
      <AnimatedText>
        <p className={`text-xl font-medium ${styles.secondaryText}`}>
          Keep up with me if you can!
        </p>
      </AnimatedText>
    </footer>
  );
};

export default Footer;
