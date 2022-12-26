//Função de validar o email
function emailValidation(email) {
  if (
    email.match(/\w.{2,}(?=\@)/gm) &&
    email.match(/(?<=\@)\w{2,}(?=\.)/gm) &&
    email.match(/(?<=\.)\w{2,}$/gm)
  ) {
    return true;
  } else {
    throw new Error("Email incorreto/inválido");
  }
}
//Função de validar a senha
function passwordValidation(password) {
  if (
    password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    )
  ) {
    return true;
  } else {
    throw new Error("Senha incorreta/inválida");
  }
}
//Botao de submit
document.getElementById("submitBtn").addEventListener("click", (event) => {
  event.preventDefault();
  let emailValid = false;
  let passValid = false;
  //Pegando as variaveis
  fullName = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  try {
    emailValid = emailValidation(email);
    passValid = passwordValidation(password);
  } catch (e) {
    alert(e.message);
  }
  if (emailValid && passValid) {
    alert("Cadastro Realizado com sucesso");
  }
});
