import React from "react";
import { styles } from "../../styles/styles";
import { myskills } from "../../constants/myskills";

const Skills = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        My Skills
      </h2>
      <div className="w-full flex flex-col gap-y-6">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myskills.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center text-black py-2 border rounded-full font-semibold text-base"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
