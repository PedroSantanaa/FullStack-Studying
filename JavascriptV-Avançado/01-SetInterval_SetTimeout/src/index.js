setTimeout(() => {
    console.log("Executando dps de 2 segundos");
  }, 2000);
  
  setInterval(() => {
    let seconds = seconds + 2;
    console.log(`Executando a cada de ${seconds} segundos de ciclo`);
  }, 2000);
  