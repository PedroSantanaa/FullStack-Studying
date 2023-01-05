import React from "react";
import "./style.css";

export const GrayImg = (props) => {
  return (
    <img
      className={props.color ? "color" : "gray-img"}
      src={props.img_url}
      alt=""
    />
  );
};
