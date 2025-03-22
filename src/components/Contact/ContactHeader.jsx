import React from "react";
import { styles } from "../../styles/styles";
import AnimatedText from "../Global/AnimatedText";

const ContactHeader = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <AnimatedText direction="right">
        <h1 className="main-heading">
          <span className={`${styles.secondaryText}`}>Say Hi!</span> and tell me
          about your idea
        </h1>
      </AnimatedText>
      <AnimatedText direction="left">
        <h2 className={`${styles.secondaryText} font-semibold text-lg lg:px-1`}>
          Reach out and let's chat.
        </h2>
      </AnimatedText>
    </section>
  );
};

export default ContactHeader;
