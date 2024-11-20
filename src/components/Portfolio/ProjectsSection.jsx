import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "../Global/ProjectCard";
import { styles } from "../../styles/styles";

const ProjectsSection = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <section
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-6 pt-6`}
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </section>
      <section className="w-full flex flex-col items-center justify-center gap-y-2 py-6 md:py-8 lg:py-12">
        <h6 className="text-2xl font-semibold">Have an idea?</h6>
        <h1 className="text-3xl md:text-6xl font-bold">
          Let's rock <span className={`${styles.secondaryText}`}>together</span>
        </h1>
      </section>
    </section>
  );
};

export default ProjectsSection;
