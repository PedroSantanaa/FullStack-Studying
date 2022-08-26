class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }
  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      console.log(
        "Velocidade maxima excedida!!\nDiminua ou causará danos irreversiveis a nave"
      );
    }
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeigth) {
    super(name, maxCrew, maxRecommendedVelocity);
    this.maxLoadWeigth = maxLoadWeigth;
  }
  speedUp(acceleration) {
    acceleration /= 2;
    console.log(`Incrementando uma aceleração de ${acceleration}`);
    super.speedUp(acceleration);
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400);
console.log(transportSpaceship);
transportSpaceship.speedUp(210);
console.log(transportSpaceship);
