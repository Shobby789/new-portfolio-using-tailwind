import React from "react";
import { styles } from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <section
      id="hero"
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h1 className="text-4xl md:text-8xl font-bold">
        I'm a web developer with a passion to create{" "}
        <span className={`${styles.secondaryText}`}>great experiences</span>
      </h1>
      <section className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-3 md:gap-y-0">
        <div className="col-span-4 flex justify-center items-center md:px-4">
          <div className="w-full border border-slate-300"></div>
        </div>
        <div className="col-span-8 leading-6">
          <p className={`${styles.darkSecondaryText} font-normal text-xl`}>
            A focused Full Stack Developer building the Frontend and Backend of
            Websites and Web Applications that lead to the success of the
            overall product.
          </p>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex items-center justify-start gap-x-2 md:gap-x-12">
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            LinkedIn <FiArrowUpRight className="text-2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            github <FiArrowUpRight className="text-2xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            fiverr <FiArrowUpRight className="text-2xl" />
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end items-center pt-6 md:pt-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center gap-x-1 rounded-full py-5 text-xl md:text-lg font-semibold bg-black text-white w-full md:w-48"
            onClick={handleNavigate}
          >
            Let's Talk <FiArrowRight />
          </motion.button>
        </div>
      </section>
    </section>
  );
};

export default Hero;
