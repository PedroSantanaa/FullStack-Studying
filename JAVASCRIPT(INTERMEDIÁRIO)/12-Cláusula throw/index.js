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
}

let shot = new Random(2);
shot.guess(5);
console.log(shot);
shot.guess(5);
shot.guess(5);
shot.guess(5);
console.log(shot);
shot.guess(5);
console.log(shot);
shot.guess(5);
console.log(shot);
