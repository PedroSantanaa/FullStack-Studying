//Set Timeout
//Criar um temporizador
console.log("Programa Iniciado");
setTimeout(() => {
  console.log("3 segundos se passaram desde o inicio do programa");
}, 3000);
//Set Interval
let seconds = 0;
setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos`);
}, 3000);
