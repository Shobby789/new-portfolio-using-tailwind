import React from "react";
import { styles } from "../../styles/styles";

const Header = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} pt-28 flex flex-col items-start justify-center gap-y-6`}
    >
      <h6 className="text-xl font-semibold">My Works</h6>
      <h1 className="text-4xl md:text-8xl font-bold">
        Creating unforgettable{" "}
        <span className={`${styles.secondaryText}`}>digital impressions</span>
      </h1>
    </div>
  );
};

export default Header;
