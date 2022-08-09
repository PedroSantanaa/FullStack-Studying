alert("Bem-Vindo!! A seguir pediremos que informe alguns dados");
let names = prompt("Nome: ");
let age = prompt("Idade:");
let ageConfirm = confirm("Confirme sua idade: " + age);
console.log(
  alert(
    "Name: " + names + "\nAge: " + age + "\nAge Confirmation: " + ageConfirm
  )
);
