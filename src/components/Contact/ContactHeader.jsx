import React from "react";
import { styles } from "../../styles/styles";

const ContactHeader = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <h6 className="text-xl font-semibold">Contact Me</h6>
      <h1 className="text-4xl md:text-8xl font-bold">
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
