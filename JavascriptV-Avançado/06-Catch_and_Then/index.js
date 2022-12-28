function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      if (true) {
        reject("Rejeitada");
      } else {
        console.log("Resolvendo a promise...");
        resolve("Resolvida, resultado = 42");
      }
    }, 3 * 1000);
  });
}

const p = execute();

p.then((result) => {
  console.log(`A promise foi: ${result}`);
})
  .catch((reject) => {
    console.log(`A promise foi: ${reject}`);
  })
  .finally(() => {
    console.log("A promise foi finalizada");
  });
