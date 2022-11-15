const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, "Centro", "Conquista", "BA");
const person = new Person("John Doe", addr);

console.log(person);
console.log(person.address.fullAddress());
