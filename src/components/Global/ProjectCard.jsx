import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectOverviewModal from "./ProjectOverviewModal";

const ProjectCard = ({ project }) => {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-y-4 z-10 bg-slate-400/10 p-4 xl:p-6 rounded-3xl">
        <img src={project?.imageUrl} alt="" className="rounded-3xl" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-semibold text-2xl">{project?.title}</h4>
            <p className={`text-base font-medium`}>{project?.description}</p>
          </div>
          <Link to="/" className="z-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="border-2 border-black px-6 py-2 rounded-3xl hover:bg-black hover:text-white hover:border-white"
            >
              <FiArrowUpRight className="text-2xl" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* <div
        className="w-full grid grid-cols-5 gap-5 border-b py-10 group"
        id="project-card"
      >
        <div className="col-span-1">
          <img src={project?.imageUrl} alt="" className="rounded-3xl" />
        </div>
        <div className="col-span-2 flex flex-col items-start justify-center gap-4">
          <div className="bg-black text-white px-5 py-4 rounded-full text-xs font-medium">
            Web Application
          </div>
          <div>
            <h4 className="font-bold text-4xl mb-2">{project?.title}</h4>
            <p className={`text-2xl font-bold uppercase text-gray-400`}>
              {project?.description}
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center gap-4">
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            itaque voluptas incidunt aliquam possimus similique sint aut, quo
            nisi odio.
          </p>
          <button
            type="button"
            className="border-2 border-black px-5 py-5 rounded-3xl hover:bg-black hover:text-white hover:border-white transition-all duration-500"
          >
            <FiArrowUpRight className="text-2xl" />
          </button>
        </div>
      </div> */}
      <ProjectOverviewModal
        showOverview={showOverview}
        setShowOverview={setShowOverview}
      />
    </>
  );
};

export default ProjectCard;
