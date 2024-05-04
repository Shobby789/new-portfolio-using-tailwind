import React from "react";
import { styles } from "../../styles/styles";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-y-4 z-10">
      <img src={project?.imageUrl} alt="" className="rounded-3xl" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h4 className="font-semibold text-2xl">{project?.title}</h4>
          <p className={`text-lg font-normal`}>{project?.description}</p>
        </div>
        <Link to="/" className="z-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="border-2 border-black px-8 py-3 rounded-3xl hover:bg-black hover:text-white hover:border-white"
          >
            <FiArrowUpRight className="text-xl" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
