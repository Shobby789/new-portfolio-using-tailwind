import React from "react";
import { TiWeatherSunny } from "react-icons/ti";

const ThemeToggler = () => {
  return (
    <button className="bg-white rounded-full w-12 h-12 fixed right-10 bottom-10 z-50 theme-toggler-btn p-1">
      <TiWeatherSunny className="w-full h-full" />
    </button>
  );
};

export default ThemeToggler;
// box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
