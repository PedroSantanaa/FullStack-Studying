class Score {
  constructor(name, age, average) {
    this.name = name;
    this.age = age;
    this.average = average;
  }
  static totalScore(average, quantityNotes) {
    return average * quantityNotes;
  }
}

let totalScore = Score.totalScore(6, 4);
console.log(totalScore);
