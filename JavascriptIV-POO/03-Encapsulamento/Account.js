class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  showBalance(email, password) {
    if (email === this.email && password === this.#password) {
      return this.#balance;
    } else {
      return null;
    }
  }
}

const user = {
  email: "pedro.ferraz01@gmail.com",
  password: "12345",
};

const myAccount = new Account(user);
console.log(myAccount);
console.log(myAccount.showBalance());
console.log(myAccount.showBalance("pedro.ferraz01@gmail.com", "12345"));
