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
    <div
      style={{
        backgroundColor: "rgba(0, 80, 160, 0.3)",
        height: "160px",
        display: "flex",
        gap: "50px",
        alignItems: "center",
        padding: "0px 120px",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "600px",
          overflowX: "hidden",
          position: "relative",
          top: "40px",
        }}
      >
        <Swiper
          onSlideChange={(swiper) => {
            listenSlideIndex(swiper.activeIndex);
          }}
          className="mySwiper"
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={{
            width: "310px",
            height: "100%",
            overflowX: "hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {AstronautData.map((el) => {
            return (
              <SwiperSlide>
                <img
                  id={el.id}
                  src={el.path}
                  style={{
                    width: "310px",
                    borderRadius: "130px",
                    border: "8px solid rgba(0, 80, 160, 0.45)",
                    position: "relative",
                    top: "90px",
                  }}
                  alt={el.nama}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={HomeStyle.deskAstroContainer}>
        <p
          style={{
            fontWeight: 700,
            fontSize: "40px",
          }}
        >
          {astronaut.nama}
        </p>
        <p
          style={{
            fontWeight: 300,
            fontSize: "15px",
            position: "relative",
            top: "-40px",
          }}
        >
          {astronaut.exist}
        </p>
        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: "46px",
            top: "160px",
          }}
        >
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
