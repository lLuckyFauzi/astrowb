import React from "react";
import Icon from "../../../Components/IconsInfo/Icon";
import DistanceIcon from "/image/icons/Distance.png";
import AgeIcon from "/image/icons/Age.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../../../App.css";
import PlanetsData from "../../../data/planets";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeStyle from "../HomeStyle.module.scss";

const Planets = () => {
  const [index, setIndex] = useState(0);
  const useSliderData = (activeIndex) => {
    setIndex(activeIndex);
  };
  const planet = PlanetsData[index];

  return (
    <div className={HomeStyle.planetsContent}>
      <div className={HomeStyle.swiperContainer}>
        <Swiper
          onActiveIndexChange={(swiper) => {
            useSliderData(swiper.activeIndex);
            console.log(swiper.activeIndex);
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {PlanetsData.map((el) => {
            return (
              <SwiperSlide id={el.id}>
                {(isActive) => {
                  return (
                    <div id={el.id}>
                      {isActive && <img src={el.path} alt={el.nama} />}
                    </div>
                  );
                }}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <motion.div
        className={"contentPlanet"}
        animate={{ opacity: 100 }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence>
          {planet && (
            <motion.div exit={{ y: -100 }} className={"contentPlanet"}>
              <p className="planetName">{planet.nama}</p>
              <p className="planetDesk">{planet.description}</p>
              <div className="planetIconInfo">
                <Icon
                  title={"Bumi/" + planet.nama}
                  content={planet.distance}
                  icon={DistanceIcon}
                />
                <Icon title={"Age"} content={planet.age} icon={AgeIcon} />
              </div>
              <div className={"detailPlanet"}>
                <div className="detailPlanetContainer">
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "35px",
                    }}
                  >
                    01
                  </p>
                  <p className="detail">{planet.detail[0]}</p>
                </div>
                <div className="detailPlanetContainer">
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: "35px",
                    }}
                  >
                    02
                  </p>
                  <p className="detail">{planet.detail[1]}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Planets;
