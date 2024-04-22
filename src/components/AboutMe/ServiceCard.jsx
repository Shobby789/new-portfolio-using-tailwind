import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
import { styles } from "../../styles/styles";

const ServiceCard = () => {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-xl">
      <SiAffinitydesigner className="w-10 h-10" />
      <h3 className="font-semibold text-xl">Front End Development</h3>
      <p className={`${styles.secondaryText} text-start text-sm`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        pariatur?
      </p>
    </div>
  );
};

export default ServiceCard;
