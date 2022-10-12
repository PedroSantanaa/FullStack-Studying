const main = document.querySelector("main");
const root = document.querySelector(":root");
const btn = document.querySelectorAll(".gameKey");
let player1 = "";
let player2 = "";
let playerTurn = "";
//Player turn
let playerTurnText = document.getElementById("playerTurn");
//Players
document.getElementById("sendPlayers").addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  playerTurn = player1;
  playerTurnText.innerHTML = `It's ${playerTurn} turn`;
});
//Player Turn

//Funcionalidade dos Botões
btn.forEach((btnKey) => {
  btnKey.addEventListener("click", (ev) => {
    const clickedBtn = ev.currentTarget;
    if (playerTurn === player1) {
      clickedBtn.innerText = "X";
      playerTurn = player2;
    } else {
      clickedBtn.innerText = "O";
      playerTurn = player1;
    }
    playerTurnText.innerHTML = `It's ${playerTurn} turn`;
  });
});
