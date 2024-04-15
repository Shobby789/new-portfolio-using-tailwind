import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../Global/ProjectCard";
import { styles } from "../../styles/styles";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      {/* <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 md:pt-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="border-2 border-black font-medium rounded-3xl hover:bg-black hover:text-white hover:border-white"
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="border-2 border-black px-6 font-medium py-3 rounded-3xl hover:bg-black hover:text-white hover:border-white"
        >
          Front End
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="border-2 border-black px-6 font-medium py-3 rounded-3xl hover:bg-black hover:text-white hover:border-white"
        >
          Backend
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="border-2 border-black px-6 font-medium py-3 rounded-3xl hover:bg-black hover:text-white hover:border-white"
        >
          Full Stack
        </motion.button>
      </div> */}
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6 pt-6`}
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-2 py-6 md:py-8 lg:py-12">
        <h6 className="text-2xl font-bold">Have an idea?</h6>
        <h1 className="text-3xl md:text-6xl font-bold">
          Let's rock <span className={`${styles.secondaryText}`}>with me</span>
        </h1>
      </div>
    </div>
  );
};

export default ProjectsSection;
