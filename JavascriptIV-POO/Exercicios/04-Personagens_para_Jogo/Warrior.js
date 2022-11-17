const Character = require("./Character");

class Warrior extends Character {
  constructor(shieldPoints, position, name, life, atq, def) {
    super(name, life, atq, def);
    this.position = position;
    this.shieldPoints = shieldPoints;
    if (position == "Defense") {
      def += shieldPoints;
    }
  }
  attack(enemy) {
    const dif = Math.abs(this.atq - enemy.def);
    if (this.position == "Attack" && dif > 0) {
      enemy.life -= dif;
    }
  }

  changePosition() {
    if (this.position == "Attack") {
      this.position = "Defense";
      this.def += this.shieldPoints;
    } else {
      this.position = "Attack";
      this.def -= this.shieldPoints;
    }
  }
}
module.exports = Warrior;
