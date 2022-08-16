const name = prompt("Nome:");
let option = prompt("Já visitou alguma cidade?(Sim ou Não)");
let cities = "";
let allCities = "";
let quantCities = 0;
while (option === "Sim") {
  quantCities++;
  cities = prompt("Nome da cidade:");
  allCities += "\n" + cities;
  option = prompt("Já visitou alguma cidade?(Sim ou Não)");
}
alert(`${name} visitou ${quantCities} cidades:\n${allCities}`);
