const Planet = require("./planet");
const solar_system = require("./solar_system");
const solarSystem = require("./solar_system");
const moment = require("moment");

const earth = new Planet("Earth", 501000000);
earth.rotate();
solar_system.planets.push(earth);
solar_system.planets.push(new Planet("Marte", 144800000));
solar_system.planets.push(new Planet("Mercurio", 74800000));
solar_system.planets.push(new Planet("Saturno", 4270000000));

console.log(solarSystem);
console.log(moment().format("hh:mm"));
