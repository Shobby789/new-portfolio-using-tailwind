import React from "react";
import { styles } from "../../styles/styles";
import { experience } from "../../constants/experience";

const Experience = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="section-heading">
        A visual partner for brands, <br /> companies and agencies
      </h2>
      <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
        {experience.map((experience, index) => {
          return (
            <div className="flex flex-col gap-y-3" key={index}>
              <h4 className={`${styles.secondaryText} font-bold text-2xl`}>
                {experience.company_name}
              </h4>
              <p className="text-xl font-semibold">{experience.designation}</p>
              <p className={`font-normal text-lg`}>{experience.year}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
