const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
// Adicionando elementos
//push(final)
arr.push("Mario");

//unshift(inicio)
arr.unshift("Pedro");

//Remover elementos
//pop(final)
arr.pop();

//shift(inicio)
arr.shift();

//Pesquisar um elemento
//includes
arr.includes("Pedro");

//indexof
arr.indexOf("Mario");

const hobbits = arr.slice(0, 4);
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(hobbits);
console.log(outros);

//Substituição de elementos
//splice
const removedElements = sociedade.splice(4, 1, "Gandalf o Cinzento");
console.log(sociedade);
console.log(removedElements);
