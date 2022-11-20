const Installment = require("./Installment");

module.exports = class Loan {
  static #fee = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#fee) / installments, i)
      );
    }
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }

  static get fee() {
    return Loan.#fee;
  }
};
