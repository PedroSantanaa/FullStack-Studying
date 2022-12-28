//Sincrono
function step02() {
  console.log("Passo 02");
}

console.log("Passo 01");
step02();
console.log("Passo 03");
//Assincrono
console.log("Passo 04");
setTimeout(() => {
  console.log("Passo 05");
}, 3000);
console.log("Passo 06");
