import React from "react";
import { styles } from "../../styles/styles";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        Services
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
