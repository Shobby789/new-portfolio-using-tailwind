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
        <h1 className="text-4xl md:text-8xl font-bold">
          I'm a web developer with a passion to create{" "}
          <span className={`${styles.secondaryText}`}>great experiences</span>
        </h1>
      </AnimatedText>
      <section className="w-full grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-3 md:gap-y-0">
        <div className="col-span-4 flex justify-center items-center md:px-4">
          <div className="w-full border border-slate-300"></div>
        </div>
        <div className="col-span-8 leading-6">
          <AnimatedText direction="left">
            <p className={`${styles.darkSecondaryText} font-normal text-xl`}>
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
