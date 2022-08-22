class Spaceship {
  constructor(name, tripQuantity) {
    this.name = name;
    this.tripQuantity = tripQuantity;
    this.engaged = "Não";
    this.openDoors = "Não";
  }

  Engaging() {
    this.engaged = "Sim";
    this.openDoors = "Sim";
  }
}

function menu() {
  let option = prompt(`Plataforma!!!
  1-Realizar engate
  2-Imprimir naves
  3-Sair`);
  return option;
}
function engaging(spaceships) {
  let nome = prompt("Nome da nave:");
  let tripulacao = parseInt(prompt("Número de tripulantes:"));
  let spaceship = new Spaceship(nome, tripulacao);
  spaceships.push(spaceship);
  if (confirm("Deseja engatar a nave??")) {
    spaceship.Engaging();
  }
  return spaceships;
}
function showAll(spaceships) {
  const allSpaceships = spaceships.reduce((listaDeNaves, spaceship) => {
    listaDeNaves +=
      spaceship.name + spaceship.tripQuantity + "-->" + "tripulantes" + "\n";
    return listaDeNaves;
  }, "");
  alert(allSpaceships);
}
function main() {
  let spaceships = [];
  option = "";
  while (option !== "3") {
    option = menu();
    switch (option) {
      case "1":
        spaceships = engaging(spaceships);
        break;
      case "2":
        showAll(spaceships);
        break;
      case "3":
        alert("Encerrando...");
        break;
      default:
        alert("Número inválido,escolha novamente");
    }
  }
}

main();
