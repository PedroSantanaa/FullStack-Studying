let spaceships = ["colossus", "artemis", "fenix"];

console.log(...spaceships);

//Variações

let newSpaceships = [...spaceships, "puller"];
console.log(newSpaceships);

//Speedup

function speedUp(velocity, acceleration) {
  return velocity + acceleration;
}

let spaceshipsAcceleration = [60, 10];
let newVelocity = speedUp(...spaceshipsAcceleration);
console.log(newVelocity);
