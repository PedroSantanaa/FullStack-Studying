export class Spaceship {
  constructor(name, batteryCapacity, batteryNow) {
    this.name = name;
    this.batteryCapacity = batteryCapacity;
    this.batteryNow = batteryNow;
  }

  percentageOfBattery() {
    return (this.batteryNow * 100) / this.batteryCapacity;
  }
}
