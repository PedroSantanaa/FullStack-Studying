class Conversion {
  constructor() {
    this.Au = 149587870;
  }

  conversion(distance) {
    return distance * this.Au;
  }
}

module.exports = Conversion;
