let firstName = prompt("Primeiro Nome:");
let lastName = prompt("Sobrenome:");
let study = prompt("Campo de estudo:");
let yearBirth = prompt("Ano de nascimento:");
const date = new Date();
let yearActual = date.getFullYear();
let age = yearActual - yearBirth;

alert(`${firstName} ${lastName} estuda ${study} e tem ${age}anos`);
