function createSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  return spaceship;
}

function addCrew(
  name: string,
  spaceship: { crew: string[]; crewLimit: number }
) {
  if (spaceship.crew.length <= spaceship.crewLimit) {
    spaceship.crew.push(name);
  } else {
    alert(`O número maximo de ${spaceship.crewLimit} não pode ser excedido`);
  }
}

function sendToMission(spaceship: {
  name: string;
  crew: string[];
  inMission: boolean;
  crewLimit: number;
}) {
  if (
    spaceship.inMission === false &&
    spaceship.crew.length >= Math.floor(spaceship.crewLimit) / 3
  ) {
    spaceship.inMission = true;
    alert(`A nave ${spaceship.name} foi mandada em missao`);
  } else {
    alert(`Nave já em missão ou não possui numero de passageiros suficiente`);
  }
}

function showSpaceships() {
  spaceships.map((spaceship) => {
    alert(
      `A nave ${spaceship.name} com o piloto ${spaceship.pilot} e capacidade maxima de ${spaceship.crewLimit} de tripulantes, possui ${spaceship.crew.length} tripulante:${spaceship.crew} e seu estado atual de missão é:${spaceship.inMission}`
    );
  });
}

const spaceships = [];
const mille = createSpaceship("Mille", "pedro", 5);
spaceships.push(mille);
const duke = createSpaceship("duke", "tiago", 5);
spaceships.push(duke);

showSpaceships();
