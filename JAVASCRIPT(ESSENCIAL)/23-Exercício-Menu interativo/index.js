let option = "";
do {
  option = prompt("1-\n2-\n3-\n4-\n5-Encrerrar");
  alert(`Opção escolhida:${option}`);
  if (option === "5") {
    alert("Programa sendo encerrado...");
  }
} while (option != 5);
