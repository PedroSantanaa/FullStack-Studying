import React from "react";
import { GrayImg } from "../../shared/gray-img";

export const Planet = (props) => {
  return (
    <div onClick={props.clickOnPlanet}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <GrayImg img_url={props.imgUrl} />
    </div>
  );
};
