import React from "react";
import { DescriptionWithLink } from "../../shared/descriptionWithLink";
import { GrayImg } from "../../shared/gray-img";

export const Planet = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <DescriptionWithLink text={props.description} link={props.link} />
      <GrayImg img_url={props.imgUrl} />
    </div>
  );
};
