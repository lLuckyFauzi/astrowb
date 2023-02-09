import React, { useState } from "react";
import AStroLogo from "/image/logo/astroLogo.png";
import NavStyle from "./NavbarStyle.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavbarVariants from "../../animations/Navbar/Navbar";
import MenuIcon from "/image/icons/menu.png";

const Navbar = () => {
  const [active, setActive] = useState("link");
  return (
    <div className={NavStyle.navContainer}>
      <motion.div
        variants={NavbarVariants}
        initial="hidden"
        animate="visible"
        className={NavStyle["navbar"]}
      >
        <div className={NavStyle.logo}>
          <img src={AStroLogo} alt="Logo" />
          <p>AstroWb</p>
        </div>
        <div className={NavStyle.burger}>
          {active === "link" ? (
            <img
              onClick={() => {
                if (active === "link") {
                  setActive("linkActive");
                } else {
                  setActive("link");
                }
              }}
              src={MenuIcon}
              alt="Burger"
            />
          ) : null}
        </div>
        <div className={NavStyle[active]}>
          {active === "linkActive" && (
            <div className={NavStyle.burgerActive}>
              <img
                onClick={() => {
                  if (active === "link") {
                    setActive("linkActive");
                  } else {
                    setActive("link");
                  }
                }}
                src={MenuIcon}
                alt="Burger"
              />
            </div>
          )}
          <div className={NavStyle.listLink}>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <p>Home</p>
            </Link>
            <p>Planets</p>
            <p>About</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
