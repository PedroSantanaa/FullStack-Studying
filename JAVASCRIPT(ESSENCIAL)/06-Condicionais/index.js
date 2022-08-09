let velocity = 80;

if (velocity < 40) {
  console.log("Estamos numa velocidade baixa");
} else if (velocity <= 100) {
  console.log("Entrando em velocidade de risco");
} else {
  console.log("Velocidade de risco");
}

velocity > 100
  ? console.log("Velocidade acima de 100")
  : console.log("Velocidade abaixo de 100");
