function menu() {
  const option = prompt(
    "Calculadora Geométrica!!\n\n1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do círculo\n6-Sair"
  );
  return option;
}
function rectanguleArea(base, heigth) {
  return base * heigth;
}
function trianguleArea(base, heigth) {
  return rectanguleArea(base, heigth) / 2;
}
function squreArea(base) {
  return rectanguleArea(base, base);
}
function trapezeArea(largerBase, smallerBase, heigth) {
  return ((largerBase + smallerBase) * heigth) / 2;
}
function circleArea(radius) {
  return 3.14 * Math.pow(radius, 2);
}
let option = "";
while (option !== "6") {
  option = menu();
  switch (option) {
    case "1":
      base = parseFloat(prompt("Valor da base:"));
      heigth = parseFloat(prompt("Valor da altura:"));
      alert(`A área é igual a ${trianguleArea(base, heigth)}`);
      break;
    case "2":
      base = parseFloat(prompt("Valor da base:"));
      heigth = parseFloat(prompt("Valor da altura:"));
      alert(`A área é igual a ${rectanguleArea(base, heigth)}`);
      break;
    case "3":
      base = parseFloat(prompt("Valor do lado"));
      alert(`A área é igual a ${squreArea(base)}`);
      break;
    case "4":
      const largerbase = parseFloat(prompt("Valor da base maior:"));
      const smallerbase = parseFloat(prompt("Valor da base menor:"));
      heigth = parseFloat(prompt("Valor da altura:"));
      alert(`A área é igual a ${trapezeArea(largerbase, smallerbase, heigth)}`);
      break;
    case "5":
      const radius = parseFloat(prompt("Valor do raio:"));
      alert(`A área é igual a ${circleArea(radius)}`);
      break;
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Número invalido!!Digite novamente:");
      break;
  }
}
