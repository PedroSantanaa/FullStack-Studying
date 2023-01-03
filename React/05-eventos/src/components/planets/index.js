import React, { Fragment } from "react";
import { Planet } from "./planet";

const clickOnPlanet = () => {
  console.log("Planeta clicado");
};
export const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List:</h3>
      <Planet
        title="Mercurio"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet
        eligendi, molestiae, accusamus eaque sit quisquam corporis, fugiat id
        nostrum ut quo quae delectus. Repellat sunt ducimus suscipit tenetur
        iusto?"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        clickOnPlanet={clickOnPlanet}
      ></Planet>
      <Planet
        title="Venus"
        description="Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus)[1] é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."
        imgUrl="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRtqGYOVmn7rlUHM47dO2MUGjjqp-NkClqUJ7QIxAwGAulcM5kvScQrZSkfglqd92ua"
        clickOnPlanet={clickOnPlanet}
      ></Planet>
    </Fragment>
  );
};
