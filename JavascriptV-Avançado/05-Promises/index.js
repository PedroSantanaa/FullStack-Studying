//Estado pendente-pending
//Estado resolvida-resolved
//Estado rejeitada-rejected
const h = new Promise((resolve, reject) => {
  console.log("A promise esta sendo executada");
  setTimeout(() => {
    if (true) {
      reject(false);
    }
    console.log("Resolvendo a promise...");
    resolve(true);
  }, 2000);
});

console.log(h);

setTimeout(() => {
  console.log(h);
}, 3000);

//Uso comum
function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    }, 3 * 1000);
  });
}

const p = execute();

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5 * 1000);
