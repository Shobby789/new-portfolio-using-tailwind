import React from "react";
import { styles } from "../../styles/styles";
import AnimatedText from "../Global/AnimatedText";

const Header = () => {
  return (
    <section
      className={`w-full ${styles.paddingHorizontal} pt-28 flex flex-col items-start justify-center gap-y-6`}
    >
      <AnimatedText direction="right">
        <h6 className="text-xl font-semibold">My Works</h6>
      </AnimatedText>
      <AnimatedText direction="left">
        <h1 className="main-heading">
          Creating unforgettable{" "}
          <span className={`${styles.secondaryText}`}>digital impressions</span>
        </h1>
      </AnimatedText>
    </section>
  );
};

export default Header;
