import React, { useState } from "react";
import HomeStyle from "./HomeStyle.module.scss";
import HomeDesk from "./Partials/HomeDesk";
import Earth from "/image/planets/earth.png";
import Saturnus from "/image/planets/saturn.png";
import Astronaut from "/image/astronaut.png";
import ISS from "/image/iss.png";
import CardFeature from "./Partials/CardFeature";
import Information from "./Partials/Information";
import Planets from "./Partials/Planets";
import AstronautList from "./Partials/AstronautList";
import IssContent from "./Partials/IssContent";
import { motion } from "framer-motion";
import HomeDeskVariants from "../../animations/Home/HomeDesk";

const Home = () => {
  return (
    <>
      <motion.div className={HomeStyle.home}>
        <div className={HomeStyle.desk}>
          <HomeDesk />
          <motion.div
            variants={HomeDeskVariants}
            initial="hidden"
            animate="visible"
            className={HomeStyle.earth}
          >
            <img src={Earth} alt="" />
          </motion.div>
        </div>
        <motion.div className={HomeStyle.listFeature}>
          <p>Website Feature</p>
          <hr style={{ marginRight: "25%" }} />
          <motion.div className={HomeStyle.cardList}>
            <motion.div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="ease-in-sine"
            >
              <CardFeature
                special
                specialTitle={"ISS Satelite"}
                img={
                  <img
                    src={ISS}
                    className={HomeStyle.satelite}
                    alt="Satelite"
                  />
                }
              />
            </motion.div>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="ease-in-sine"
            >
              <CardFeature
                title={"Planets"}
                description={"Macam macam planet dan diameter pada planet"}
                img={
                  <img
                    src={Saturnus}
                    className={HomeStyle.imgOne}
                    alt="Saturnus"
                  />
                }
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-easing="ease-in-sine"
            >
              <CardFeature
                title={"Astronaut"}
                description={
                  "Nama nama seorang astronaut yang pernah mendarat di bulan."
                }
                img={
                  <img
                    src={Astronaut}
                    className={HomeStyle.imgTwo}
                    alt="Jupiter"
                  />
                }
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={HomeStyle.information}>
        <Information />
      </motion.div>
      <div className={HomeStyle.planets}>
        <p className={HomeStyle.planetTitle}>Planets</p>
        <Planets />
        <hr />
      </div>
      <div className={HomeStyle.astronaut}>
        <p className={HomeStyle.astronautTitle}>Astronaut</p>
        <AstronautList />
      </div>
      <div className={HomeStyle.iss}>
        <div className={HomeStyle.issContainer}>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            className={HomeStyle.issTitle}
          >
            ISS Satellite Tracker
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1200"
            className={HomeStyle.issSimpleDesk}
          >
            ISS merupakan singkatan dari Internasional Space Station, atau dalam
            bahasa indonesia disebut Stasiun Luar Angkasa Nasional.
          </p>
        </div>
        <IssContent />
      </div>
    </>
  );
};

export default Home;
