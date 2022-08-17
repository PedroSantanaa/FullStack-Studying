let startMoney = parseFloat(prompt("Valor inicial:"));
let option = "";
let add = 0;
let remove = 0;
do {
  option = prompt(
    `Dinheiro atual:R$${startMoney}\n1-Adicionar dinheiro\n2-Remover dinheiro\n3-Sair`
  );
  switch (option) {
    case "1":
      add = parseFloat(prompt("Valor a ser adicionado:"));
      startMoney += add;
      break;
    case "2":
      remove = parseFloat(prompt("Valor a ser removido:"));
      startMoney -= remove;
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida.");
      break;
  }
} while (option != "3");
