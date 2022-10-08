// //Selecionar o botão
// const btn = document.getElementById("register-button");
// //Para adicionar o evento
// btn.addEventListener("click", () => {
//   alert("Clicou no botão");
// });

function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem");
  }
}
function removeEvent() {
  button.removeEventListener("click", register);
  alert("Event removed");
}
const button = document.getElementById("register-button");

button.addEventListener("click", register);
