import React from "react";
import { styles } from "../../styles/styles";
import AnimatedText from "../Global/AnimatedText";

const Education = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText>
        <h2 className="section-heading">My Education</h2>
      </AnimatedText>
      <section className="w-full flex flex-col">
        <AnimatedText direction="up">
          <div className="border-b border-t py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                Bachelor of Computer Science
              </p>
              <p className={`text-lg font-semibold`}>
                Benazir Bhutto Shaheed University Lyari
              </p>
            </div>
            <p className={`text-lg font-semibold`}>Jan 2020 - Dec 2023</p>
          </div>
        </AnimatedText>
        <AnimatedText>
          <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                Intermediate
              </p>
              <p className={`text-lg font-semibold`}>
                Government Boys Degree College Larkana
              </p>
            </div>
            <p className={`text-lg font-semibold`}>Jan 2017 - Nov 2019</p>
          </div>
        </AnimatedText>

        <AnimatedText>
          <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
            <div className="flex flex-col items-start gap-y-3">
              <p className="text-[22px] md:text-3xl font-semibold">
                Matriculation
              </p>
              <p className={`text-lg font-semibold`}>
                Government Pilot Higher Secondary School Larkana
              </p>
            </div>
            <p className={`text-lg font-semibold`}>Nov 2016</p>
          </div>
        </AnimatedText>
      </section>
    </section>
  );
};

export default Education;
