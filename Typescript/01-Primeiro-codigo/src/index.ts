function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };

  alert(
    `A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`
  );
  return spaceship;
}

function accelerate(
  targetSpeed: number,
  spaceship: {
    name: string;
    speed: number;
  }
) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`);
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`);
  } else {
    alert(`Mantendo a velocidade da name${spaceship.name}`);
  }
}

const spaceshipName = prompt("Insira o nome da nave");
const captainName = prompt("Insira o nome do capitão");

const currentShip = sendSpaceship(spaceshipName, captainName);

const speed = parseFloat(
  prompt("Insira a velocidade para qual deseja acelerar:")
);

accelerate(speed, currentShip);
