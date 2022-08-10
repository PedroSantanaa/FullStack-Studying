let lightYear = prompt("Light year distance:");
alert(
  "We have 3 options: \nParsec(pc) \nAstronomical unit(UN) \nKilometers(km)"
);
let option = prompt("Choose one: \n1-pc \n2-UN \n3-km");
let unit;
let conversion;

switch (option) {
  case "1":
    unit = "Parsec";
    conversion = lightYear * 0.36601;
    break;
  case "2":
    unit = "Astronomical unit";
    conversion = lightYear * 63241.1;
    break;
  case "3":
    unit = "Kilometers";
    conversion = lightYear * (9.5 * Math.pow(10, 12));
    break;
  default:
    unit = "Unit not defined";
    conversion = "Out of scope conversion ";
}
alert(
  `Light Year: ${lightYear} \nSelected option: ${unit} \nConversion: ${conversion}`
);
