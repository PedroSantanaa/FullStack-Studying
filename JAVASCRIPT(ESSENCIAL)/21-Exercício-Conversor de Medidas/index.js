let meters = parseFloat(prompt("Digite o número em metros: "));
const option = prompt(
  "Conversão:\nmilímetro (mm)\ncentímetro (cm)\ndecímetro (dm)\ndecâmetro (dam)\nhectômetro (hm)\nquilômetro (km)"
);
let convertedNumber = 0;
let correctoption = true;
switch (option) {
  case "mm":
    convertedNumber = meters * 1000;
    break;
  case "cm":
    convertedNumber = meters * 100;
    break;
  case "dm":
    convertedNumber = meters * 10;
    break;
  case "dam":
    convertedNumber = meters / 10;
    break;
  case "hm":
    convertedNumber = meters / 100;
    break;
  case "km":
    convertedNumber = meters / 1000;
    break;
  default:
    alert("Opção inválida");
    correctoption = false;
    break;
}
if (option === true) {
  alert(
    `${meters}m convertido para ${option} é igual a ${convertedNumber}${option}`
  );
}
