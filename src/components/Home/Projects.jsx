import React from "react";
import { styles } from "../../styles/styles";
import ProjectCard from "../Global/ProjectCard";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../../constants/projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/portfolio");
    // navigate("#portfolio-header");
  };
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        See my latest works
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
      <div className="w-full flex justify-center">
        <motion.button
          className="flex items-center justify-center gap-x-1 rounded-full px-3 md:px-6 py-4 text-lg md:text-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={handleNavigate}
        >
          View All Projects <FiArrowRight className="text-xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
