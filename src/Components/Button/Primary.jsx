import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";
import { motion } from "framer-motion";

const PrimaryButton = (props) => {
  const { children, style } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, backgroundColor: "transparent", color: "white" }}
      style={style}
      className={ButtonStyle.primary}
    >
      {children || "Button"}
    </motion.button>
  );
};

export default PrimaryButton;
