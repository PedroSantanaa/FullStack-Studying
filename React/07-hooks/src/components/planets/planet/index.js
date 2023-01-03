import React, { useEffect, useState } from "react";
import { DescriptionWithLink } from "../../shared/descriptionWithLink";
import { GrayImg } from "../../shared/gray-img";

async function getSatellites(id) {
  const response = await fetch(`http://localhost:3000/planetas/${id}.json`);
  const data = response.json();
  return data;
}
export const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    }, []);
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
      <ul>
        {satellites.map((satellite, index) => {
          return <li key={index}>{satellite.name}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
};
