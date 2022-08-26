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

class battleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    alert("Recolhendo armas e parando a nave de batalha");
  }
}

class discoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    alert("Recolhendo equipamento de amostras e parando a nave de descoberta");
  }
}

let darwin = new discoverySpaceship("Darwin", 10, 250);
let fenix = new battleSpaceship("Fenix", 4, 500);

console.log(darwin);
console.log(fenix);

darwin.speedUp(280);
fenix.speedUp(100);

darwin.stop();
fenix.stop();
