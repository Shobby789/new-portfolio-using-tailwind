import React from "react";
import { styles } from "../../styles/styles";
import CertificateAccordion from "./CertificateAccordion";

const CertificatesSection = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} ${styles.paddingVertical} flex flex-col gap-y-6 md:gap-y-12`}
    >
      <h2 className="text-3xl md:text-6xl font-bold flex flex-wrap">
        Discover my certificates
      </h2>
      <div className="w-full flex flex-col">
        <CertificateAccordion
          title={"Web & Mobile App Development"}
          year={"2023"}
        />
        <CertificateAccordion title={"React Developer"} year={"2023"} />
        <CertificateAccordion title={"Front End Development"} year={"2023"} />
      </div>
    </div>
  );
};

export default CertificatesSection;
