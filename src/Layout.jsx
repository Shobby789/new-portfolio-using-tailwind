import React from "react";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
