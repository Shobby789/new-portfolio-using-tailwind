import React from "react";
import { styles } from "../../styles/styles";
import AnimatedText from "../Global/AnimatedText";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`w-full ${styles.paddingHorizontal} pt-20 lg:pt-32 xl:pt-40 2xl:pt-56 pb-12 flex flex-col gap-y-6 md:gap-y-12`}
    >
      <AnimatedText direction="right">
        <h1 className="main-heading">
          I'm a web developer with a passion to create{" "}
          <span className={`${styles.secondaryText}`}>great experiences</span>
        </h1>
      </AnimatedText>
      <section className="w-full flex items-center justify-between gap-x-10 pl-2">
        <div className="w-full border border-slate-300 hidden lg:block lg:w-[40%]"></div>
        <div className="w-full lg:w-[60%]">
          <AnimatedText direction="left">
            <p
              className={`${styles.darkSecondaryText} font-normal text-xl 2xl:text-2xl`}
            >
              A focused Full Stack Developer building the Frontend and Backend
              of Websites and Web Applications that lead to the success of the
              overall product.
            </p>
          </AnimatedText>
        </div>
      </section>
    </section>
  );
};

export default Hero;
