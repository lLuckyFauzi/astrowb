import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Core = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Core;
