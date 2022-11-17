const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const assasin = new Thief("Pedin", 40, 100, 30);
const mage = new Mage(120, "Isabela", 70, 10, 50);
const warrior = new Warrior(180, "Attack", "Tiago", 200, 50, 80);
console.table({ assasin, mage, warrior });

assasin.attack(mage);
console.log(mage);
assasin.attack(warrior);
console.log(warrior);
warrior.changePosition();
assasin.attack(warrior);
console.log(warrior);
mage.heal(warrior);
console.log(warrior);
