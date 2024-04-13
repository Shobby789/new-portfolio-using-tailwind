import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0">
        <div className="col-span-12 md:col-span-5 md:pr-16">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-3xl md:h-96"
          />
        </div>
        <div className="col-span-12 md:col-span-7 flex flex-col items-start justify-center gap-y-4 xl:pr-16">
          <h2 className="text-3xl md:text-6xl font-bold">
            Design that sparks engagement and inpires action
          </h2>
          <p
            className={`${styles.darkSecondaryText} font-medium text-lg leading-6`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            dolore aliquid, rem reiciendis inventore, consectetur voluptate
            fugiat mollitia repellat eligendi aliquam adipisci necessitatibus
            illum porro ipsa labore cumque optio maiores harum quaerat! Ad eaque
            dicta, asperiores excepturi reprehenderit impedit.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="font-medium text-xl flex justify-center items-center gap-x-1"
          >
            About Me <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
