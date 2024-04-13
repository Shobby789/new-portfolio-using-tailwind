import React from "react";
import { styles } from "../../styles/styles";

const Header = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} pt-28 pb-12 flex flex-col items-start justify-center gap-y-6`}
    >
      <h6 className="text-2xl font-bold">About Me</h6>
      <h1 className="text-4xl md:text-7xl font-bold">
        Hey I am Shoaib Muhammad
      </h1>
      <p className={`${styles.secondaryText} font-normal text-lg`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        repudiandae. Vel aut dolores fugit hic rem dicta laborum officia commodi
        delectus, corrupti nesciunt praesentium eius repellat. Maxime dolorum
        tempore vel ex ipsam repellendus, architecto ab quaerat reprehenderit
        sint? Veniam, cum!
      </p>
    </div>
  );
};

export default Header;
