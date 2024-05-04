import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
import { styles } from "../../styles/styles";
import { TfiLayoutCtaCenter } from "react-icons/tfi";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-start gap-3 p-6 rounded-xl border">
      <div className="flex justify-center items-center bg-gray-100 w-20 h-20 rounded-full">
        <TfiLayoutCtaCenter className="w-9 h-9 block" />
      </div>
      <h3 className="font-semibold text-xl">title</h3>
      <p className={`${styles.secondaryText} text-start text-base`}>
        description
      </p>
    </div>
  );
};

export default ServiceCard;
