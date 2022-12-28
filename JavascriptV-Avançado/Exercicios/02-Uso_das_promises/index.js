function calculateIMC(height, weight) {
  return new Promise((resolve, reject) => {
    if (isNaN(height) || isNaN(weight)) {
      reject("Parametros invalidos: Digite apenas números");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showIMC(height, weight) {
  calculateIMC(height, weight)
    .then((result) => {
      if (result < 18.5) {
        console.log(`Seu IMC é de ${result}:magreza`);
      } else if (result < 24.9) {
        console.log(`Seu IMC é de ${result}:normal`);
      } else if (result < 29.9) {
        console.log(`Seu IMC é de ${result}:sobrepeso`);
      } else if (result < 39.9) {
        console.log(`Seu IMC é de ${result}:obesidade`);
      } else {
        console.log(`Seu IMC é de ${result}:obesidade grave`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);
}

showIMC(1.7, 69.2);
showIMC(1.8, 68.2);
showIMC(1.9, 67.2);
showIMC(1.94, 59.2);
