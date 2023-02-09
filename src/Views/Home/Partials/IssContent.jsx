import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/Button/Primary";
import ISS from "/image/iss.png";
import HomeStyle from "../HomeStyle.module.scss";

const IssContent = () => {
  return (
    <div className={HomeStyle.issContentContainer}>
      <div className={HomeStyle.issDetail}>
        <p data-aos="fade-right" className={HomeStyle.detailOne}>
          01
        </p>
        <p data-aos="fade-right" className={HomeStyle.detailIss}>
          Merupakan sebuah stasiun luar angkasa modular yang terletak di orbit
          bumi rendah Berfungsi sebagai laboratorium penelitian gravitasi mikro
          dan lingkungan luar angkasa, yang mana penelitian ilmiah ini mencakupi
          bidang astrobiologi, astronomi, meteorologi, dan fisika.
        </p>
        <div className={HomeStyle.issInfoContainer}>
          <Link
            to={"/iss"}
            style={{
              color: "white",
            }}
          >
            <div className={HomeStyle.butnIss}>
              <PrimaryButton>Track Now</PrimaryButton>
            </div>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              fontWeight: "300",
              fontSize: "12px",
            }}
            data-aos="fade-right"
          >
            <p>Ketinggian: 410km</p>
            <p>Kecepatan: 766km/h</p>
          </div>
        </div>
      </div>
      <div className={HomeStyle.issImgContainer}>
        <img data-aos="zoom-in-up" data-aos-duration="1100" src={ISS} alt="" />
      </div>
    </div>
  );
};

export default IssContent;
