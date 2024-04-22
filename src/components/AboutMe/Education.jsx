import React from "react";
import { styles } from "../../styles/styles";

const Education = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        Education
      </h2>
    </div>
  );
};

export default Education;
