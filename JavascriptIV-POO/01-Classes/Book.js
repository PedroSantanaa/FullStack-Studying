class Book {
  constructor(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.inStock = 0;
    this.published = false;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  publish() {
    this.published = true;
  }
}
const author = { name: "Chistopher" };
const tags = ["adventure", "fantasy"];
const eragon = new Book("Eragon", 466, tags, author);
console.log(eragon);
eragon.addToStock(50);
eragon.publish();
console.log(eragon);
