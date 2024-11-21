import React from "react";
import { styles } from "../../styles/styles";
import ProjectCard from "../Global/ProjectCard";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../../constants/projects";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/portfolio");
    // navigate("#portfolio-header");
  };

  return (
    <section
      id="projects"
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="section-heading text-center">
        Discover the Success Stories <br /> of my top projects
      </h2>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </section>
      <section className="w-full flex justify-center">
        <Link
          to="/portfolio"
          className="flex items-center justify-center gap-x-1 text-lg font-semibold hover:text-slate-400 transition-all duration-200"
        >
          View All Projects <FiArrowRight className="text-xl" />
        </Link>
      </section>
    </section>
  );
};

export default Projects;
