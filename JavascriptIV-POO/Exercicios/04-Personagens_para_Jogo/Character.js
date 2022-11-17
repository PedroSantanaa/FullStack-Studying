class Character {
  constructor(name, life, atq, def) {
    this.name = name;
    this.life = life;
    this.atq = atq;
    this.def = def;
  }

  attack(target) {
    const dif = target.atq - target.def;
    if (dif > 0) {
      target.life -= dif;
    } else {
      target.life -= 0;
    }
  }
}

module.exports = Character;
