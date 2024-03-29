import React from "react";
import { DescriptionWithLink } from "../../shared/descriptionWithLink";
import { GrayImg } from "../../shared/gray-img";

export const Planet = (props) => {
  const names = ["a", "b", "c", "d"];
  const satellites = names.map((name) => {
    return <li>Satelite {name}</li>;
  });
  let title;
  if (props.titleWithUnderline) {
    title = (
      <h4>
        <u>{props.title}</u>
      </h4>
    );
  } else {
    title = <h4>{props.title}</h4>;
  }
  return (
    <div>
      {title}
      <DescriptionWithLink text={props.description} link={props.link} />
      <GrayImg color={props.color} img_url={props.imgUrl} />
      <h4>Satellites</h4>
      <ul>{satellites}</ul>
      <hr />
    </div>
  );
};
