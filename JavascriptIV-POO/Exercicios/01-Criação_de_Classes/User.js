class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(sendedEmail, sendedPassword) {
    if (sendedEmail === this.email && sendedPassword === this.password) {
      console.log(`${this.fullname}: seu login foi realizado com sucesso`);
    } else {
      console.log(`${this.fullname}:seu login não foi realizado!!
      Email ou senha incorretos!!`);
    }
  }
}

const pedro = new User("Pedro Santana", "pedro.ferraz01@gmail.com", "789857");

pedro.login("pedro.ferraz01@gmail.com", "789857P12");
pedro.login("pedro.ferraz01@gmail.com", "789857");
