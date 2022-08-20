//Função simples
function dobro(x) {
  alert(`O dobro de ${x} é igual a ${x * 2}`);
}
dobro(2);
//Função simples com parametro padrão
function ola(name = "") {
  alert(`Olá, ${name}!!`);
}
ola("Pedro");
//Função soma
function add(a = 0, b = 0) {
  soma = a + b;
  alert(`O resultado de ${a} + ${b} = ${soma}`);
}
add(4, 5);
//Função cadastro usuario
function userSign(name, email, password, type = "admin") {
  const user = {
    name, //name:name
    email,
    password,
    type,
  };
  console.log(user);
}
userSign("pedro", "pedro@oi.com", 1234);
//Função com muitos parametros
function muitosParametros(
  nome,
  telefone,
  senha,
  idade,
  email,
  aniversario,
  altura,
  peso
) {
  //...
}
//Pode ser resolvido com objeto:
function objetoParametro(usuario) {
  usuario.name;
  usuario.email;
  usuario.password;
}

const userDates = {
  name: "",
  email: "",
  password: "",
};
objetoParametro(userDates);
