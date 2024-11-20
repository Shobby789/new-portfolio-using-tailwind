import React from "react";
import { styles } from "../../styles/styles";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { SiAmazonapigateway } from "react-icons/si";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrDocumentPerformance, GrOptimize } from "react-icons/gr";

const Services = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="section-heading">Services</h2>
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-16">
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <CgWebsite className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">Website Development</h3>
          <p className={`text-start text-base`}>
            Creating websites using React JS, Next JS, Node JS, Express JS and
            MongoDB.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <TfiLayoutCtaCenter className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">Responsive Design</h3>
          <p className={`text-start text-base`}>
            Ensuring websites display correctly on all devices and screens.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <RiShoppingCartLine className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">E-commerce Solutions</h3>
          <p className={`text-start text-base`}>
            Building online stores with secure payment systems and inventory
            management.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <SiAmazonapigateway className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">Custom Web Applications</h3>
          <p className={`text-start text-base`}>
            Tailored software solutions for specific business needs.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <MdOutlineIntegrationInstructions className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">API Integration</h3>
          <p className={`text-start text-base`}>
            Incorporating third-party services into websites for added
            functionality.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center">
            <GrDocumentPerformance className="w-10 h-10 block" />
          </div>
          <h3 className="font-semibold text-xl">Performance Optimization</h3>
          <p className={`text-start text-base`}>
            Improving website speed and efficiency for better user experience.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Services;
