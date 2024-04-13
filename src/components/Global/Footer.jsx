import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`w-full bg-black text-white ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-12`}
    >
      <h2 className="uppercase text-3xl md:text-4xl font-medium">
        Have an idea? let's connect
      </h2>
      <a
        className={`text-2xl md:text-5xl lg:text-7xl font-bold ${styles.secondaryText}`}
        href="mailto:smshoaib2001@gmail.com"
      >
        smshoaib2001<span className="text-white">@gmail.com</span>
      </a>
      <hr />
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-0 p-0">
        <div className="col-span-12 md:col-span-6 flex items-center justify-start p-0 gap-x-4 md:gap-x-12">
          <Link to="/" className="text-lg font-medium underline">
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium underline">
            About
          </Link>
          <Link to="/portfolio" className="text-lg font-medium underline">
            Porftfolio
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
            <FaTwitter className="text-white w-5 h-5" />
          </Link>
          <Link to="/portfolio" className="text-lg font-medium">
            <FaLinkedin className="text-white w-5 h-5" />
          </Link>
          <Link to="/contact" className="text-lg font-medium">
            <FaGithub className="text-white w-5 h-5" />
          </Link>
        </div>
      </div>
      <p className={`text-xl font-medium ${styles.secondaryText}`}>
        Keep up with me if you can!
      </p>
    </div>
  );
};

export default Footer;
