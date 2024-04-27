import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { styles } from "../../styles/styles";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const CertificateAccordion = ({ title, year, description }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const handleShowAccordion = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <div className="w-full flex flex-col gap-y-2 border-b py-4">
      <div
        className="w-full flex justify-between items-center cursor-pointer transition-all duration-500"
        onClick={handleShowAccordion}
      >
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[22px] md:text-2xl font-bold">{title}</h3>
          <p className={`${styles.secondaryText} text-xl font-bold`}>{year}</p>
        </div>
        <motion.button
          onClick={handleShowAccordion}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {showAccordion ? (
            <FaMinus className="text-xl" />
          ) : (
            <FaPlus className="text-xl" />
          )}
        </motion.button>
      </div>
      {showAccordion && (
        <div
          className={`transition-all duration-300 text-lg font-normal ${styles.secondaryText}`}
        >
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      )}
    </div>
  );
};

export default CertificateAccordion;
