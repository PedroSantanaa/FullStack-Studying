module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  findBooksbyName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }
  saveBooks(book) {
    const bookExists = this.findBooksbyName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBooksbyName(bookName);
    book?.addToStock(quantity);
  }

  removeBooksToStock(bookName, quantity) {
    const book = this.findBooksbyName(bookName);
    book?.removeFromStock(quantity);
  }

  findPostersbyName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }
  savePosters(poster) {
    const posterExists = this.findPostersbyName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPostersbyName(posterName);
    poster?.addToStock(quantity);
  }

  removePostersToStock(posterName, quantity) {
    const poster = this.findPostersbyName(posterName);
    poster?.removeFromStock(quantity);
  }

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
