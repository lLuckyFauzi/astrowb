import React from "react";
import HomeStyle from "../HomeStyle.module.scss";

const Information = () => {
  return (
    <div className={HomeStyle.informationContainer}>
      <div className={HomeStyle.teksOne}>
        <p data-aos="fade-right" data-aos-duration="1000">
          Apa yang akan <br /> kita lakukan?
        </p>
        <hr data-aos="fade-right" data-aos-duration="1500" />
      </div>
      <p
        data-aos="fade-right"
        data-aos-duration="1400"
        className={HomeStyle.teksTwo}
      >
        Berjelajah menuju luar angkasa dan mengetahui planet <br /> planet dan
        astronot yang mendarat di bulan.
      </p>
    </div>
  );
};

export default Information;
