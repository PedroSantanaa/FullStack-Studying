let number = parseFloat(prompt("Número desejado:"));
let multi = "";
for (let i = 1; i < 21; i++) {
  multi += "\n" + number * i;
}
alert(multi);
