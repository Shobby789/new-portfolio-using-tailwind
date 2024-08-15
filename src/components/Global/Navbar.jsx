import React, { useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { styles } from "../../styles/styles";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const sideRef = useRef();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleDemo = (e) => {
    if (!sideRef.current.contains(e.target)) {
      setShowSidebar(!showSidebar);
    }
  };

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div
      className={`w-full fixed bg-white py-3 md:py-6 flex justify-between items-center ${styles.paddingHorizontal} z-30`}
    >
      <div className="">
        <Link to="/" className="text-base md:text-xl font-bold">
          Shoaib <span className={`${styles.secondaryText}`}>Muhammad</span>
        </Link>
      </div>
      {/* <div className="hidden lg:flex items-start justify-end gap-8">
        <Link to="/" className="text-base font-semibold">
          Home
        </Link>
        <Link to="/about" className="text-base font-semibold">
          About
        </Link>
        <Link to="/portfolio" className="text-base font-semibold">
          Portfolio
        </Link>
        <Link to="/contact" className="text-base font-semibold">
          Contact
        </Link>
      </div> */}
      <div className="flex items-center gap-x-2 md:gap-x-6">
        <motion.button
          onClick={() => navigate("/contact")}
          className="border border-black hidden md:flex items-center justify-center gap-x-1 rounded-full px-2 md:px-6 md:py-2 text-sm md:text-lg font-semibold hover:bg-black hover:text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Let's Talk <FiArrowRight className="text-lg" />
        </motion.button>
        <button
          onClick={handleShowSidebar}
          className="border border-black rounded-3xl px-4 md:px-6 py-2 md:py-[10px] bg-white hover:bg-black hover:text-white transition-all duration-300 hidden lg:block"
        >
          <HiMenu className="text-xl md:text-2xl" />
        </button>
      </div>
      <button
        onClick={handleShowSidebar}
        className="rounded-3xl px-4 md:px-6 py-2 md:py-[10px] lg:hidden bg-white hover:bg-black hover:text-white transition-all duration-300"
      >
        <HiMenu className="text-xl md:text-2xl" />
      </button>
      <div
        className={`bg-transparent w-full flex justify-end fixed top-4 right-0 2xl:right-36 2xl:top-4 z-50 px-6 lg:px-20 pt-12 lg:pt-20 transition-all duration-500 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={handleShowSidebar}
      >
        <div
          ref={sideRef}
          className={`h-auto bg-black text-white w-3/5 md:w-1/5 relative shadow-xl p-6 2xl:p-10 z-50 rounded-xl`}
        >
          {/* <button onClick={handleShowSidebar}>
            <IoClose className="text-2xl" />
          </button> */}
          <div className="px-1 w-full flex flex-col items-start justify-start gap-y-4 2xl:gap-6">
            <Link to="/" className="text-base font-semibold">
              Home
            </Link>
            <Link to="/about" className="text-base font-semibold">
              About
            </Link>
            <Link to="/portfolio" className="text-base font-semibold">
              Portfolio
            </Link>
            <Link to="/contact" className="text-base font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
