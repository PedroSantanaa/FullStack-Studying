class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(discountPercent) {
    let newPrice = this.price * ((100 - discountPercent) / 100);
    return newPrice;
  }
}

const fork = new Product("Fork", "To eat", 5);
fork.addToStock(60);
console.log(fork.calculateDiscount(10));
console.log(fork);
