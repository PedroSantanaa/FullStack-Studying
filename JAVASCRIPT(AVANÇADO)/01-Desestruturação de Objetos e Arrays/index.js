// Objeto
let myName = {
  firstName: "Pedro",
  lastName: "de Oliveira",
};
//Primeira forma
let { firstName: Firstname, lastName: Lastname } = myName;
//Caso seja igual ao objeto
let { firstName, lastName } = myName;
console.log(Firstname, Lastname);
console.log(firstName, lastName);

// Arrays
let teachers = ["Pedro", "Roberto", "Gabriel", "Wesley"];

let [firstTeacher, secondTeacher, thirdTeacher] = teachers;
console.log(firstTeacher, secondTeacher, thirdTeacher);
