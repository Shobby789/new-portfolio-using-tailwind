import React from "react";
import { styles } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const AboutMe = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical}`}
    >
      <section className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0">
        <div className="col-span-12 md:col-span-5 md:pr-16 flex justify-start">
          <img
            src="/about-mockup.webp"
            alt="profile image"
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col items-start justify-center gap-y-6 xl:pr-16">
          <h2 className="section-heading">
            Design that sparks engagement and inpires action
          </h2>
          <div className="flex flex-col items-start justify-center gap-y-2">
            <p className={`${styles.darkSecondaryText} font-normal text-lg`}>
              I'm a{" "}
              <span className={`font-semibold`}>Full Stack Developer</span>{" "}
              building the Front-end and Back-end of Websites and Web
              Applications that lead to the success of the overall product.
              Check out some of my works in the Projects section.
            </p>
            <p
              className={`${styles.darkSecondaryText} font-normal text-lg leading-6`}
            >
              I'm open to <span className={` font-normal`}>Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to{" "}
              <Link to="/contact" className={`font-semibold`}>
                Contact me.
              </Link>
            </p>
          </div>
          <Link
            to="/about"
            className="font-medium text-lg flex justify-center items-center gap-x-1 hover:text-slate-400 transition-all duration-200"
            onClick={handleNavigate}
          >
            About Me <FiArrowRight />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
