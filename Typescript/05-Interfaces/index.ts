//type

// type Planet = {
//   name: string;
//   satellite: string[];
// };

//interface

interface CelestialBody {
  name: string;
  mass: number;
}

//Herança

interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sun: Star = {
  name: "Sol",
  mass: 1.989 * 10 ** 30,
  age: 4.603 * 10 ** 9,
  planets: [],
};

//Interface com classes

class MilkWayPlanet implements Planet {
  name: string;
  mass: number;
  population: number;

  constructor(name: string, mass: number, population: number) {
    this.name = name;
    this.mass = mass;
    this.population = population;
  }

  createSatellite(name: string) {}
}
