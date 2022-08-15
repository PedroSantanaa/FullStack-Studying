let firstCar = prompt("Nome do primeiro carro:");
let firstSpeed = parseFloat(prompt("Velocidade do carro"));
let secondCar = prompt("Nome do segundo carro:");
let secondSpeed = parseFloat(prompt("Velocidade do carro"));

if (firstSpeed > secondSpeed) {
  alert(`${firstCar} é mais rapido que o ${secondCar}`);
} else if (firstSpeed < secondSpeed) {
  alert(`${secondCar} é mais rapido que o ${firstCar}`);
} else {
  alert(`A velocidade do ${firstCar} é igual ao do ${secondCar}`);
}
