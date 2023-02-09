import React from "react";
import IconStyle from "./IconStyle.module.css";

const Icon = (props) => {
  const { title, content, icon } = props;

  return (
    <div className={IconStyle.icon}>
      <div className={IconStyle.iconImg}>
        <img src={icon} alt="Icon" />
      </div>
      <div
        style={{
          color: "white",
        }}
      >
        <p className={IconStyle.iconTitle}>{title}</p>
        <p className={IconStyle.iconContent}>{content}</p>
      </div>
    </div>
  );
};

export default Icon;
