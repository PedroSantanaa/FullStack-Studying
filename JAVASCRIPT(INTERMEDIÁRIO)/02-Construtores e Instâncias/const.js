class spacialStation {
  constructor(name, platformsQuantity) {
    this.name = name;
    this.platformsQuantity = platformsQuantity;
  }
}

let observatory = new spacialStation("Observatório", 40);

console.log(observatory);
console.log(observatory.name);
