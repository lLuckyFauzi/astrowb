import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/Button/Primary";
import ISS from "/image/iss.png";

const IssContent = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "47px 120px",
        backgroundImage:
          "linear-gradient(90.53deg, rgba(0, 39, 78, 0.6) 19.41%, rgba(0, 39, 78, 0)",
      }}
    >
      <div
        style={{
          width: "50%",
        }}
      >
        <p
          data-aos="fade-right"
          style={{
            fontWeight: "700",
            fontSize: "30px",
          }}
        >
          01
        </p>
        <p
          data-aos="fade-right"
          style={{
            fontWeight: "300",
            fontSize: "17px",
          }}
        >
          Merupakan sebuah stasiun luar angkasa modular yang terletak di orbit
          bumi rendah Berfungsi sebagai laboratorium penelitian gravitasi mikro
          dan lingkungan luar angkasa, yang mana penelitian ilmiah ini mencakupi
          bidang astrobiologi, astronomi, meteorologi, dan fisika.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "15px",
          }}
        >
          <Link
            to={"/iss"}
            style={{
              color: "white",
            }}
          >
            <PrimaryButton style={{ borderRadius: "17px" }}>
              Track Now
            </PrimaryButton>
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
      <div style={{ position: "absolute", right: "120px", top: "-160px" }}>
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1100"
          src={ISS}
          alt=""
          style={{
            width: "500px",
          }}
        />
      </div>
    </div>
  );
};

export default IssContent;
