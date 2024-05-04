import React from "react";
import { styles } from "../../styles/styles";

const Education = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        My Education
      </h2>
      <div className="w-full">
        <div className="border-b border-t py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
          <div className="flex flex-col items-start gap-y-3">
            <p className="text-[22px] md:text-3xl font-bold">
              Bachelor of Computer Science
            </p>
            <p className={`text-lg font-semibold`}>
              Benazir Bhutto Shaheed University Lyari
            </p>
          </div>
          <p className={`text-lg font-semibold`}>Jan 2020 - Dec 2023</p>
        </div>
        <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
          <div className="flex flex-col items-start gap-y-3">
            <p className="text-[22px] md:text-3xl font-bold">Intermediate</p>
            <p className={`text-lg font-semibold`}>
              Government Boys Degree College Larkana
            </p>
          </div>
          <p className={`text-lg font-semibold`}>Jan 2017 - Nov 2019</p>
        </div>
        <div className="border-b py-6 w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end">
          <div className="flex flex-col items-start gap-y-3">
            <p className="text-[22px] md:text-3xl font-bold">Matriculation</p>
            <p className={`text-lg font-semibold`}>
              Government Pilot Higher Secondary School Larkana
            </p>
          </div>
          <p className={`text-lg font-semibold`}>Nov 2016</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
