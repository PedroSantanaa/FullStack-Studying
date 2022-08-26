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
      alert(
        "Velocidade maxima excedida!!\nDiminua ou causará danos irreversiveis a nave"
      );
    }
  }
}

class transportSpaceship extends Spaceship {
  speedUp() {
    console.log("Naves de transporte so aumentam sua velocidade em 1km/s");
    this.currentVelocity += 1;
  }
}

let transportspaceship = new transportSpaceship("Transportadora", 4, 100);
transportspaceship.speedUp();
console.log(transportspaceship);
