let spaceship = prompt("Nome da nave:");
let char = prompt("Letra a ser substituida:");
let charReplace = prompt("Letra para substituir:");
let newSpaceship = "";
for (let i = 0; i < spaceship.length; i++) {
  if (spaceship[i] == char) {
    newSpaceship += charReplace;
  } else {
    newSpaceship += spaceship[i];
  }
}
alert(`Novo nome da nave: ${newSpaceship}`);
