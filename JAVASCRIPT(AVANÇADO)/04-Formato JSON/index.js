let planet_json = `{
  "name":"Terra",
  "physicalCharacteristics":{
    "surfaceArea":510072000,
    "equatorialDiameter":12756.2},
    "colors":["Azul","Branco","Marrom"],
    "startRotation":"00:00",
    "finishRotation":"23:59"
}`;
console.log(planet_json);

//Usando JSON
let planet = JSON.parse(planet_json);
console.log(planet);

console.log(planet.name);
console.log(planet.startRotation);
