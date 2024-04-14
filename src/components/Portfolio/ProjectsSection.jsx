import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../Global/ProjectCard";
import { styles } from "../../styles/styles";

const ProjectsSection = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-12`}
    >
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6`}
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
