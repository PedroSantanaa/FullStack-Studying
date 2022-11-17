const Character = require("./Character");

class Mage extends Character {
  constructor(magePoints, name, life, atq, def) {
    super(name, life, atq, def);
    this.magePoints = magePoints;
  }

  attack(enemy) {
    const dif = this.magePoints + this.atq - enemy.def;
    if (dif > 0) {
      enemy.life -= dif;
    }
  }

  heal(ally) {
    ally.life += this.magePoints * 2;
  }
}

module.exports = Mage;
