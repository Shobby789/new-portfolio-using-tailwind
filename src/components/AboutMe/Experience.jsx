import React from "react";
import { styles } from "../../styles/styles";
import AnimatedText from "../Global/AnimatedText";

const Experience = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText>
        <h2 className="section-heading">My Experience</h2>
      </AnimatedText>
      <section className="w-full flex flex-col">
        <AnimatedText direction="">
          <div className="border-b border-t py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                Web Developer
              </p>
              <p className={`text-lg font-semibold`}>LaunchBox Pakistan</p>
            </div>
            <p className={`text-lg font-semibold`}>March 2024 - Present</p>
          </div>
        </AnimatedText>
        <AnimatedText direction="">
          <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                Junior Software Engineer Internee
              </p>
              <p className={`text-lg font-semibold`}>
                Regex Dot Private Limited
              </p>
            </div>
            <p className={`text-xl font-semibold`}>Jan 2024 - March 2024</p>
          </div>
        </AnimatedText>
        <AnimatedText direction="">
          <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                React Developer Internee
              </p>
              <p className={`text-lg font-semibold`}>Internee.pk</p>
            </div>
            <p className={`text-lg font-semibold`}>Jul 2023 - Sep 2024</p>
          </div>
        </AnimatedText>
      </section>
    </section>
  );
};

export default Experience;
