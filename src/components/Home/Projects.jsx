import React from "react";
import { styles } from "../../styles/styles";
import ProjectCard from "../Global/ProjectCard";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../../constants/projects";
import { Link } from "react-router-dom";
import AnimatedText from "../Global/AnimatedText";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText direction="up">
        <h2 className="section-heading text-center">
          Discover the Success Stories <br /> of my top projects
        </h2>
      </AnimatedText>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </section>
      <section className="w-full flex justify-center">
        <AnimatedText direction="right">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-x-1 text-lg font-semibold hover:text-slate-400 transition-all duration-200"
          >
            View All Projects <FiArrowRight className="text-xl" />
          </Link>
        </AnimatedText>
      </section>
    </section>
  );
};

export default Projects;
