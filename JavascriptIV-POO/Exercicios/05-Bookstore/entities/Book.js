const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    super(`Livro:${title}`, description, price, inStock);
    this.title = title;
    this.synopsis = synopsis;
    this.pages = pages;
    this.genre = genre;
    this.author = author;
  }
};
