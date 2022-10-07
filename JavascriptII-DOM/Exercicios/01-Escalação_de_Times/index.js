function escalar(event) {
  event.preventDefault();
  const confirmar = confirm("Confirmar escalação??");
  if (confirmar == true) {
    let position = document.getElementById("position").value;
    let playerName = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    createList(position, playerName, number);
  }
}
function createList(position, playerName, number) {
  const ul = document.getElementById("players-list");
  const li = document.createElement("li");
  li.id = `player-${number}`;
  li.innerText = `${position}:${playerName}-${number}`;
  ul.appendChild(li);
  document.getElementById("position").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
}
function remove() {
  const ul = document.getElementById("players-list");
  const removerNumber = document.getElementById("remover").value;
  let numberPlayer = document.getElementById(`player-${removerNumber}`);
  confirmar = confirm(`Deseja excluir o camisa ${removerNumber}`);
  if (confirmar && numberPlayer) {
    ul.removeChild(numberPlayer);
  }
  document.getElementById("position").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("remover").value = "";
}
