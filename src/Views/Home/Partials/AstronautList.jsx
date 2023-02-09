import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeStyle from "../HomeStyle.module.scss";
import AstronautData from "../../../data/astronaut";
import { useState } from "react";
import { Pagination } from "swiper";

const AstronautList = () => {
  const [index, setIndex] = useState(0);
  const astronaut = AstronautData[index];
  const listenSlideIndex = (active) => {
    setIndex(active);
  };
  return (
    <div className={HomeStyle.astoListContainer}>
      <div className={HomeStyle.swiperAstoContainer}>
        <Swiper
          onSlideChange={(swiper) => {
            listenSlideIndex(swiper.activeIndex);
          }}
          className={HomeStyle.mySwiper}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {AstronautData.map((el) => {
            return (
              <SwiperSlide>
                <img id={el.id} src={el.path} alt={el.nama} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={HomeStyle.deskAstroContainer}>
        <p className={HomeStyle.astroName}>{astronaut.nama}</p>
        <p className={HomeStyle.exist}>{astronaut.exist}</p>
        <div className={HomeStyle.astroDetail}>
          <div className={HomeStyle.astronautDesk}>
            <p style={{ fontWeight: 700, fontSize: "35px" }}>01</p>
            <p className={HomeStyle.deskAstro}>{astronaut.detail[0]}</p>
          </div>
          <div className={HomeStyle.astronautDesk}>
            <p style={{ fontWeight: 700, fontSize: "35px" }}>02</p>
            <p className={HomeStyle.deskAstro}>{astronaut.detail[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstronautList;
