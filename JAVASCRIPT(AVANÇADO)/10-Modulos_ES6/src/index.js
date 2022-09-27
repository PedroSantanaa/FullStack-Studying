import Spaceship from "./spaceship";
import armamentsKind from "./armaments";

const spaceship = new Spaceship(
  "USS Enterprise",
  "Tiberius",
  armamentsKind.laser
);

console.log(spaceship);
