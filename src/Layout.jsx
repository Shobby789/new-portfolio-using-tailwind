import React from "react";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";

const Layout = ({ children }) => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
