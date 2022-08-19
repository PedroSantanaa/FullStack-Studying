let queue = [];
let option = "";
let newCard = "";
let lastCard = "";
while (option !== "3") {
  let cards = "";
  for (let i = 0; i < queue.length; i++) {
    const element = queue[i];
    cards += `${element}\n`;
  }
  option = prompt(
    `\Pilha de Cartas:\n${cards}\n\n1-Adicionar Cartas\n2-Puxar Uma Carta\n3-Sair`
  );
  switch (option) {
    case "1":
      newCard = prompt("Nome da Carta: ");
      queue.push(newCard);
      break;
    case "2":
      lastCard = queue.pop();
      if (!lastCard) {
        alert("Não há cartas");
      } else {
        alert(`A carta retirada foi: ${lastCard}`);
      }

      break;
    case "3":
      alert("Encerrando a pilha de cartas!!");
  }
}
