import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h1 className="text-4xl md:text-8xl font-bold">
        I'm a web designer and developer with a passion to create{" "}
        <span className={`${styles.secondaryText}`}>great experiences</span>
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-3 md:gap-y-0">
        <div className="col-span-4 flex justify-center items-center md:px-4">
          <div className="w-full border border-slate-300"></div>
        </div>
        <div className="col-span-8 leading-6">
          <p className={`${styles.darkSecondaryText} font-medium text-lg`}>
            A focused MERN Stack Developer building the Frontend and Backend of
            Websites and Web Applications that leads to the success of the
            overall product
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex items-center justify-start gap-x-2 md:gap-x-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-xl font-bold uppercase flex items-center justify-center gap-x-1"
          >
            LinkedIn <FiArrowUpRight className="text-2xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-xl font-bold uppercase flex items-center justify-center gap-x-1"
          >
            github <FiArrowUpRight className="text-2xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-xl font-bold uppercase flex items-center justify-center gap-x-1"
          >
            Fiverr <FiArrowUpRight className="text-2xl" />
          </motion.button>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end items-center pt-6 md:pt-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center gap-x-1 rounded-full px-3 md:px-6 py-4 text-lg md:text-lg font-semibold bg-black text-white w-40"
          >
            Let's Talk <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
