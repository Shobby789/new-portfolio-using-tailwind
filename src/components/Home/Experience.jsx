import React from "react";
import { styles } from "../../styles/styles";
import { experience } from "../../constants/experience";

const Experience = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        A visual partner for brands, <br /> companies and agencies
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {experience.map((experience, index) => {
          return (
            <div className="flex flex-col gap-y-3" key={index}>
              <h4 className={`${styles.secondaryText} font-bold text-2xl`}>
                {experience.company_name}
              </h4>
              <p className="text-xl font-bold">{experience.designation}</p>
              <p className={`${styles.secondaryText} font-bold text-lg`}>
                {experience.year}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
