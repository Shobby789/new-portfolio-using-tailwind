// ServiceCard.jsx
import React from "react";
import AnimatedText from "../Global/AnimatedText";

const ServiceCard = ({ title, description, Icon }) => {
  return (
    <AnimatedText>
      <div className="min-h-[240px] flex flex-col items-start gap-4 bg-slate-400/10 p-10 rounded-2xl">
        <div className="flex justify-center items-center">
          <Icon className="w-10 h-10 block" />
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-start text-base">{description}</p>
      </div>
    </AnimatedText>
  );
};

export default ServiceCard;
