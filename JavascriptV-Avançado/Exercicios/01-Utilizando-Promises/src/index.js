import { Spaceship } from "./Spaceship.js";
import { SpaceshipEngine } from "./SpaceshipEngine.js";

const Sophia = new Spaceship("Sophia", 10, 5);
const Amsterda = new Spaceship("Amsterdã", 14, 10);
const Estrela = new Spaceship("Estrela-Anã", 20, 4);

const SophiaEngine = new SpaceshipEngine(Sophia);
const AmsterdaEngine = new SpaceshipEngine(Amsterda);
const EstrelaEngine = new SpaceshipEngine(Estrela);

SophiaEngine.turnOn();
AmsterdaEngine.turnOn();
EstrelaEngine.turnOn();

console.log("Teste de Promises");
