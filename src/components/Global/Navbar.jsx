import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { styles } from "../../styles/styles";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div
      className={`w-full fixed bg-white py-4 flex justify-between items-center ${styles.paddingHorizontal}`}
    >
      <Link to="/" className="text-2xl font-semibold">
        Shoaib <span className={`${styles.secondaryText}`}>Muhammad</span>
      </Link>
      <div className="flex items-center gap-x-2 md:gap-x-6">
        <motion.button
          onClick={() => navigate("/contact")}
          className="border-2 border-black flex items-center justify-center gap-x-1 rounded-full px-3 md:px-6 py-2 text-sm md:text-lg font-semibold hover:bg-black hover:text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Let's Talk <FiArrowRight className="text-lg" />
        </motion.button>
        <button
          onClick={handleShowSidebar}
          className="border-2 border-black rounded-2xl px-3 py-2 hover:bg-black hover:text-white transition-all duration-300"
        >
          <HiMenu className="text-xl" />
        </button>
      </div>
      {showSidebar && (
        <div className="bg-transparent w-full flex justify-end fixed left-0 top-0 right-0 bottom-0 h-[100vh] transition-all duration-400">
          <div className="h-full bg-white w-2/5 relative shadow-xl p-4 transition-all duration-400">
            <button onClick={handleShowSidebar}>
              <IoClose className="text-2xl" />
            </button>
            <div className="pt-6 px-1 w-full flex flex-col items-start justify-start gap-y-4">
              <Link to="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link to="/about" className="text-lg font-semibold">
                About
              </Link>
              <Link to="/portfolio" className="text-lg font-semibold">
                Portfolio
              </Link>
              <Link to="/contact" className="text-lg font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
