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
        className={`w-full bg-transparent absolute inset-0 h-screen ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700`}
        onClick={handleShowSidebar}
      >
        <div className="h-full w-[40%] bg-black shadow-2xl float-end flex flex-col justify-center items-start gap-8 px-12">
          <button
            onClick={handleShowSidebar}
            className="absolute top-6 right-20 bg-black text-white transition-all duration-300"
          >
            <IoClose className="text-xl md:text-2xl 2xl:text-4xl" />
          </button>
          <Link
            to={"/"}
            className="text-white font-bold text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl opacity-90 hover:text-slate-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-white font-bold text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl opacity-90 hover:text-slate-400 transition-all duration-300"
          >
            About me
          </Link>
          <Link
            to={"/projects"}
            className="text-white font-bold text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl opacity-90 hover:text-slate-400 transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to={"/contact"}
            className="text-white font-bold text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl opacity-90 hover:text-slate-400 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
