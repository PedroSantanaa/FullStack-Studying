class Vehicle {
  move() {
    console.log("Se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("Carro se movendo");
  }
}
class Ship extends Vehicle {
  move() {
    console.log("Navio navegando");
  }
}
class Plane extends Vehicle {
  move(speed) {
    console.log(`Aviao decolou a ${speed}km/h`);
  }
}

const lambo = new Car();
const titanic = new Ship();
const tam = new Plane();

lambo.move();
titanic.move();
tam.move(400);
