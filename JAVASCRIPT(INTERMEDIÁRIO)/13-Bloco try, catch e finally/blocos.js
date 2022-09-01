class Random {
  constructor(number) {
    this.number = number;
    this.lifes = 5;
  }

  guess(guessedNumber) {
    console.log("Guessing...");
    if (this.lifes > 0) {
      if (guessedNumber !== this.number) {
        this.lifes -= 1;
      }
    } else {
      throw new Error("Sua vida chegou a 0");
    }
  }

  revive() {
    this.lifes = 5;
  }
}

let shot = new Random(2);
try {
  shot.guess(5);
  shot.guess(5);
  shot.guess(5);
  shot.guess(5);
  shot.guess(5);
  shot.guess(5);
} catch (e) {
  console.log(e.message);
  shot.revive();
} finally {
  console.log("Voce tentou...");
}
console.log(shot);
