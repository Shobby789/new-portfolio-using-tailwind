import React, { useEffect, useRef } from "react";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import { motion, useAnimation, useInView } from "framer-motion";

const Layout = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div>
      <Navbar />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-full"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
