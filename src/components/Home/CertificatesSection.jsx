import React from "react";
import { styles } from "../../styles/styles";
import CertificateAccordion from "./CertificateAccordion";
import AnimatedText from "../Global/AnimatedText";

const CertificatesSection = ({ title }) => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText>
        <h2 className="section-heading">{title}</h2>
      </AnimatedText>
      <section className="w-full flex flex-col">
        <CertificateAccordion
          title={"Web & Mobile App Development"}
          year={"2023"}
        />
        <CertificateAccordion title={"React Developer"} year={"2023"} />
        <CertificateAccordion title={"Front End Development"} year={"2023"} />
      </section>
    </section>
  );
};

export default CertificatesSection;
