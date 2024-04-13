import React from "react";
import { styles } from "../../styles/styles";

const ContactHeader = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} pt-6 md:pt-24 lg:pt-28 pb-6 md:pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <h6 className="text-2xl font-bold">Contact Me</h6>
      <h1 className="text-4xl md:text-7xl font-bold">
        <span className={`${styles.secondaryText}`}>Say Hi!</span> and tell me
        about your idea
      </h1>
      <p className={`${styles.secondaryText} font-semibold text-lg`}>
        Reach out and let's chat.
      </p>
    </div>
  );
};

export default ContactHeader;
