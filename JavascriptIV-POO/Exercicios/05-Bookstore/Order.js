module.exports = class Order {
  #total;
  #itens;
  #user;
  constructor(itens, user) {
    itens.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantidade insuficiente em estoque");
      }
    });
    this.#itens = itens;
    this.#user = user;
    this.#total = itens.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity,
      0
    );
  }

  get data() {
    return { itens: this.#itens, user: this.#user, total: this.#total };
  }
};
