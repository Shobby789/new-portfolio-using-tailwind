import React from "react";
import { styles } from "../../styles/styles";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <img src={project?.imageUrl} alt="" className="h-4/5 rounded-3xl" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h4 className="font-semibold text-2xl">{project?.title}</h4>
          <p className={`${styles.secondaryText} text-xl font-medium`}>
            {project?.description}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="border-2 border-black px-8 py-3 rounded-3xl hover:bg-black hover:text-white hover:border-white"
        >
          <FiArrowRight className="text-xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectCard;