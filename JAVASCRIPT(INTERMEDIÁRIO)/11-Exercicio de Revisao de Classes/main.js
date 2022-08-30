function menu() {
  option = prompt(`Registro de Nave
  1-Acelerar a nave
  2-Trocar de nave
  3-Imprimir e sair`);
  return option;
}

function main() {
  class Spaceship {
    static get deceleration() {
      return 0.17;
    }
    constructor(name, crewQuantity) {
      this.name = name;
      this.crewQuantity = crewQuantity;
      this.velocity = 0;
    }
    speedUp(acceleration) {
      this.velocity += acceleration * (1 - Spaceship.deceleration);
    }
  }

  class battleSpaceship extends Spaceship {
    constructor(name, crewQuantity, gunsQuantity) {
      super(name, crewQuantity);
      this.gunsQuantity = gunsQuantity;
    }
  }

  class transportSpaceship extends Spaceship {
    constructor(name, crewQuantity, seatsQuantity) {
      super(name, crewQuantity);
      this.seatsQuantity = seatsQuantity;
    }
  }
  let option = "";
  let name = prompt("Nome da nave:");
  let crewQuantity = prompt("Quantidade de tripulantes:");
  let spaceshipType = prompt(`Qual tipo da nave:
  1-Batalha
  2-Transporte`);
  let spaceship;
  if (spaceshipType === "1") {
    let gunsQuantity = prompt("Número de armas");
    spaceship = new battleSpaceship(name, crewQuantity, gunsQuantity);
  } else {
    let seatsQuantity = prompt("Número de lugares:");
    spaceship = new transportSpaceship(name, crewQuantity, seatsQuantity);
  }
  while (option !== "3") {
    option = menu();
    switch (option) {
      case "1":
        let acceleration = parseInt(prompt("Aceleração:"));
        spaceship.speedUp(acceleration);
        break;
      case "2":
        name = prompt("Nome da nave:");
        crewQuantity = prompt("Quantidade de tripulantes:");
        spaceshipType = prompt(`Qual tipo da nave:
        1-Batalha
        2-Transporte`);
        if (spaceshipType === "1") {
          let gunsQuantity = prompt("Número de armas");
          spaceship = new battleSpaceship(name, crewQuantity, gunsQuantity);
        } else {
          let seatsQuantity = prompt("Número de lugares:");
          spaceship = new transportSpaceship(name, crewQuantity, seatsQuantity);
        }
        break;
      case "3":
        console.log(spaceship);
        alert("Encerrando...");
        break;
      default:
        alert("Número inválido");
        break;
    }
  }
}

main();
