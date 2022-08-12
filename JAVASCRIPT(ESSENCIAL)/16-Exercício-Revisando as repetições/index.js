let spaceship = prompt("Nome da nave:");
let length = spaceship.length;
let backSpaceship = "";
// Helmet
for (let i = length - 1; i >= 0; i--) {
  if (spaceship[i] == "e") {
    break;
  }
  backSpaceship += spaceship[i];
}
alert(
  `Nome original da nave: ${spaceship}\nNome após inversao e ocultação: ${backSpaceship}`
);
