import React from "react";
import { styles } from "../../styles/styles";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { SiAmazonapigateway } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrDocumentPerformance, GrOptimize } from "react-icons/gr";
import AnimatedText from "../Global/AnimatedText";
import { services } from "../../constants/myservices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText>
        <h2 className="section-heading">Services</h2>
      </AnimatedText>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-10">
        {services.map(({ id, title, description, icon }) => (
          <ServiceCard
            key={id}
            title={title}
            description={description}
            Icon={icon}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;
