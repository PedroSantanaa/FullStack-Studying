import React, { useState, Fragment, useEffect } from "react";
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
  const removeLast = () => {
    let newPlanets = [...planets];
    newPlanets.pop();
    setPlanets(newPlanets);
  };
  const duplicatePlanets = () => {
    let lastPlanet = planets[planets.length - 1];
    setPlanets([...planets, lastPlanet]);
  };
  return (
    <Fragment>
      <h3>Planet List:</h3>
      <button onClick={removeLast}>Remove Last Planet</button>
      <button onClick={duplicatePlanets}>Duplicate Planets</button>
      <hr />
      {planets.map((planet, index) => {
        return (
          <Planet
            id={planet.id}
            title={planets.name}
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
