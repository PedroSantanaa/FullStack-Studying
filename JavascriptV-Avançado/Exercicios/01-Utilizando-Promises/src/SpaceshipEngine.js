export class SpaceshipEngine {
  constructor(spaceship) {
    this.name = spaceship.name;
    this.percentageOfBattery = spaceship.percentageOfBattery();
  }

  turnOn() {
    this.checkCurrentLoad()
      .then((result) => {
        console.log(
          `${this.name}->Partida autorizada:Carga atual em ${result}%`
        );
      })
      .catch((result) => {
        console.log(`${this.name}->Partida não autorizada:Carga em ${result}%`);
      });
  }

  checkCurrentLoad() {
    return new Promise((resolve, reject) => {
      if (this.percentageOfBattery < 30) {
        reject(this.percentageOfBattery);
      } else {
        resolve(this.percentageOfBattery);
      }
    });
  }
}
