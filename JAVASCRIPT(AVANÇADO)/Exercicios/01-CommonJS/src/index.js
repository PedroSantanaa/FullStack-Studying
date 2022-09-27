const Planet = require("./planets");
const Conversion = require("./conversion");

let planets = [];

planets.push(new Planet("Mercurio", 0.39));
planets.push(new Planet("Venus", 0.72));
planets.push(new Planet("Terra", 1));
planets.push(new Planet("Júpiter", 5.2));
planets.push(new Planet("Marte", 1.52));
planets.push(new Planet("Saturno", 9.53));
planets.push(new Planet("Urano", 19.1));
planets.push(new Planet("Netuno", 30));

planets.forEach((planet) => {
  let converted = new Conversion().conversion(planet.AU);
  console.log(`${planet.name}--
Em AU:${planet.AU}AU
Em KM:${converted.toFixed(2)}KM`);
});
