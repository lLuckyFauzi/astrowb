import React from "react";

const Link = (props) => {
  const { title, link } = props;
  return (
    <div
      style={{
        position: "relative",
        top: "10px",
      }}
    >
      <p style={{ fontWeight: 400, fontSize: "20px", color: "#7E7E7E" }}>
        {title}
      </p>
      <div style={{ fontWeight: 400, fontSize: "17px" }}>{link}</div>
    </div>
  );
};

export default Link;
