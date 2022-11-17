const Character = require("./Character");

class Thief extends Character {
  attack(enemy) {
    const dif = this.atq - enemy.def * 2;
    if (dif > 0) {
      enemy.life -= dif;
    }
  }
}

module.exports = Thief;
