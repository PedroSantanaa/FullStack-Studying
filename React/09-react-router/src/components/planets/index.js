import React, { useState, Fragment, useEffect } from "react";
import { Form } from "./forms/Planets";
import { Planet } from "./planet";

async function getPlanets() {
  const response = await fetch("http://localhost:3000/planetas/planets.json");
  const data = await response.json();
  return data;
}
export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  };
  return (
    <Fragment>
      <h3>Planet List:</h3>
      <hr />
      <Form addPlanet={addPlanet} />
      <hr />
      {planets.map((planet, index) => {
        return (
          <Planet
            id={planet.id}
            title={planet.name}
            description={planet.description}
            link={planet.link}
            imgUrl={planet.img_url}
            key={index}
          />
        );
      })}
    </Fragment>
  );
};
