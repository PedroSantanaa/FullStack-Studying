class Planet {
  constructor(name, rotateArea) {
    this.name = name;
    this.rotateArea = rotateArea;
  }

  rotate() {
    console.log("Rotacionando");
  }
}

module.exports = Planet;
