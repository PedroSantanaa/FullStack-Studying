alert("A seguir escolha dois números");
let firstNumber = Number(prompt("Escolha o primeiro número:"));
let secondNumber = Number(prompt("Escolha o segundo número:"));
let option = prompt(
  "Escolha a operação desjada:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão"
);
let result;
switch (option) {
  case "1":
    result = firstNumber + secondNumber;
    break;
  case "2":
    result = firstNumber - secondNumber;
    break;
  case "3":
    result = firstNumber * secondNumber;
    break;
  case "4":
    result = firstNumber / secondNumber;
    break;

  default:
    alert("Número escolhido não existe!!!");
    break;
}
alert(`Seu resultado é ${result}`);
