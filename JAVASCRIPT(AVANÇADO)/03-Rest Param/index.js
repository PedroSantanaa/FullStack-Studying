//Sem Rest Param
function greetCrew(message, names) {
  names.forEach((name) => console.log(`${message},${name}`));
}

greetCrew("Seja bem-vindo", ["Arthur", "Jake", "Mel"]);

//Com Rest Param
function greetCrew(message, ...names) {
  names.forEach((name) => console.log(`${message},${name}`));
}

greetCrew("Seja bem-vindo", "Arthur", "Jake", "Mel");
