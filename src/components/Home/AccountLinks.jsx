import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedText from "../Global/AnimatedText";
import { styles } from "../../styles/styles";

const AccountLinks = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <section
      className={`w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 py-10 ${styles.paddingHorizontal}`}
    >
      <div className="col-span-12 md:col-span-6 flex items-center justify-start gap-x-2 md:gap-x-12">
        <AnimatedText>
          <Link
            to="https://www.linkedin.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            LinkedIn <FiArrowUpRight className="text-2xl" />
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link
            to="https://www.github.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            github <FiArrowUpRight className="text-2xl" />
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link
            to="https://www.fiverr.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            fiverr <FiArrowUpRight className="text-2xl" />
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link
            to="https://www.upwork.com/"
            target="_blank"
            className="text-lg font-medium uppercase flex items-center justify-center gap-x-1 hover:text-slate-400 transition-all duration-200"
          >
            Upwork <FiArrowUpRight className="text-2xl" />
          </Link>
        </AnimatedText>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-end items-center pt-6 md:pt-0">
        <AnimatedText>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center gap-x-1 rounded-full py-3 lg:py-5 text-base md:text-lg font-semibold bg-black text-white w-full md:w-48"
            onClick={handleNavigate}
          >
            Let's Talk <FiArrowRight />
          </motion.button>
        </AnimatedText>
      </div>
    </section>
  );
};

export default AccountLinks;
