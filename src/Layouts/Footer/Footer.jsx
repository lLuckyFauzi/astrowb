import React from "react";
import FooterStyle from "./FooterStyle.module.scss";
import Link from "./Partials/Link";
import Logo from "/image/logo/astroLogo.png";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.logo}>
        <img src={Logo} alt="Logo" />
        <p>AstroWb</p>
      </div>
      <div className={FooterStyle.contentContainer}>
        <div className={FooterStyle.content}>
          <p className={FooterStyle.footerTitle}>
            <b>SMK</b> Yadika Soreang
          </p>
          <p className={FooterStyle.location}>
            Jl. Raya Soreang, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa
            Barat 40921
          </p>
        </div>
        <Link
          title={"Contact"}
          link={
            <>
              <p>0895632035020</p>
              <p style={{ position: "relative", top: "-10px" }}>
                smkyadikasoreang@gmail.com
              </p>
            </>
          }
        />
        <Link
          title={"Media Social"}
          link={
            <>
              <p>WhatsApp</p>
              <p style={{ position: "relative", top: "-10px" }}>Instagram</p>
            </>
          }
        />
        <Link
          title={"Helper"}
          link={
            <>
              <p>Planets</p>
              <p style={{ position: "relative", top: "-10px" }}>Astronaut</p>
              <p style={{ position: "relative", top: "-20px" }}>ISS Tracker</p>
            </>
          }
        />
      </div>
      <div className={FooterStyle.copyright}>
        <hr />
        <p style={{ padding: "20px 0px" }}>Website By SMK Yadika Soreang</p>
      </div>
    </div>
  );
};

export default Footer;
