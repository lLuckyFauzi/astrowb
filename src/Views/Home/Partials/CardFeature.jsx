import React from "react";
import HomeStyle from "../HomeStyle.module.scss";
import { motion } from "framer-motion";

const CardFeature = (props) => {
  const { special, specialTitle, title, img, description } = props;

  return (
    <motion.div className={special ? HomeStyle.cardSpecial : HomeStyle.card}>
      <p className={special ? HomeStyle.cardTitleSpecial : HomeStyle.cardTitle}>
        {special ? "Special Feature" : title}
      </p>
      <hr style={{ width: "100%" }} />
      <div className={HomeStyle.specialDeskContainer}>
        <div className={HomeStyle.featureImgContainer}>{img}</div>
        <div className={HomeStyle.specialDesk}>
          {special ? (
            <>
              <p style={{ fontWeight: 700 }} className={HomeStyle.featureTitle}>
                {specialTitle}
              </p>
              <div className={HomeStyle.specialDeskInfo}>
                <p>Peluncuran: 20 November 1998</p>
                <p>Kecepatan: 766 km/s</p>
                <p>Massa: 419.725 kg</p>
              </div>
            </>
          ) : (
            <>
              <p className={HomeStyle.cardDesk}>{description}</p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CardFeature;
