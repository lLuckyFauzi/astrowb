import React from "react";
import PrimaryButton from "../../../Components/Button/Primary";
import { motion } from "framer-motion";
import HomeStyle from "../HomeStyle.module.scss";

const HomeDesk = () => {
  return (
    <motion.div className={HomeStyle.deskContainer}>
      <motion.p
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        Learning Astronomy with A Simple Website
      </motion.p>
      <motion.p
        initial={{ x: -125, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        Ayo! Belajar mengenai banyak hal di luar angkasa.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={HomeStyle.deskBtn}
      >
        <PrimaryButton>Explore</PrimaryButton>
      </motion.div>
    </motion.div>
  );
};

export default HomeDesk;
