let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 0,
};
const velocityAfter2Seconds = (velocity, acceleration) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Nova velocidade: ${velocity}`);
        resolve(velocity);
      } else {
        console.log("Aceleração invalida");
        reject("Erro de aceleração");
      }
    });
  }, 1000);
};

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
  .then((result) => {
    komodoShip.velocity = result;
    console.log("Depois de acelerar:\n", komodoShip);
  })
  .catch((result) => {
    console.log(result);
  });
console.log("Executando a Promise");
console.log(komodoShip);
