const App = require("./App");

App.createUser("pedro.ferraz", "Pedro");
App.createUser("tiago.ferraz", "Tiago");
App.createUser("isabela.ferraz", "Isabela");

App.deposit("pedro.ferraz", 100);
App.transfer("pedro.ferraz", "tiago.ferraz", 20);
App.chanceLoanFee(10);
App.takeLoan("isabela.ferraz", 2000, 24);

console.log(App.findUser("pedro.ferraz"));
console.log(App.findUser("pedro.ferraz").account);
console.log(App.findUser("tiago.ferraz"));
console.log(App.findUser("tiago.ferraz").account);
console.log(App.findUser("isabela.ferraz"));
console.log(App.findUser("isabela.ferraz").account);
