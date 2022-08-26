//Set
class TransportSpaceship {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  set velocity(newVelocity) {
    if (newVelocity > 120) {
      this.currentVelocity = 120;
    } else {
      this.currentVelocity = newVelocity;
    }
  }
}

let spaceship = new TransportSpaceship("Transportadora");
spaceship.velocity = 130;
console.log(spaceship);

//Get

class ResourceProcessStation {
  constructor(name, monthlyProcessedLoad) {
    this.name = name;
    this.monthlyProcessedLoad = monthlyProcessedLoad;
  }

  get weeklyProcessedLoad() {
    return this.monthlyProcessedLoad / 4;
  }
}

let ResourceProcessor = new ResourceProcessStation("Gaia", 500);
console.log(ResourceProcessor);
console.log(ResourceProcessor.weeklyProcessedLoad);
ResourceProcessor.monthlyProcessedLoad = 600;
console.log(ResourceProcessor.weeklyProcessedLoad);
