import React from "react";
import FooterStyle from "../FooterStyle.module.scss";

const Link = (props) => {
  const { title, link } = props;
  return (
    <div className={FooterStyle.link}>
      <p className={FooterStyle.linkTitle}>{title}</p>
      <div className={FooterStyle.linkList}>{link}</div>
    </div>
  );
};

export default Link;
