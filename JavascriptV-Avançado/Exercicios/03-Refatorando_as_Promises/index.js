async function calculateIMC(height, weight) {
  if (isNaN(height) || isNaN(weight)) {
    return Promise.reject("Parametros invalidos: Digite apenas números");
  }
  return weight / (height * height);
}

async function showIMC(height, weight) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);
    const IMC = await calculateIMC(height, weight);

    if (IMC < 18.5) {
      console.log(`Seu IMC é de ${IMC}:magreza`);
    } else if (IMC < 24.9) {
      console.log(`Seu IMC é de ${IMC}:normal`);
    } else if (IMC < 29.9) {
      console.log(`Seu IMC é de ${IMC}:sobrepeso`);
    } else if (IMC < 39.9) {
      console.log(`Seu IMC é de ${IMC}:obesidade`);
    } else {
      console.log(`Seu IMC é de ${IMC}:obesidade grave`);
    }
  } catch (error) {
    console.log(error);
  }
}

showIMC(1.7, 69.2);
showIMC(1.8, 68.2);
showIMC(1.9, 67.2);
showIMC(1.94, 59.2);
