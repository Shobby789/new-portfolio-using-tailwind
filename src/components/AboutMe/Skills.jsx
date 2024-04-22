import React from "react";
import { styles } from "../../styles/styles";

const Skills = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">Skills</h2>
    </div>
  );
};

export default Skills;
