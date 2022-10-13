const main = document.querySelector("main");
const root = document.querySelector(":root");
const btn = document.querySelectorAll(".gameKey");
const winner = document.getElementById("winnerPlayer");
let player1 = "";
let player2 = "";
let playerTurn = "";
let board = ["", "", "", "", "", "", "", "", ""];
//Player turn
let playerTurnText = document.getElementById("playerTurn");
//Players
document.getElementById("sendPlayers").addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  playerTurn = player1;
  if (playerTurn !== "") {
    playerTurnText.innerHTML = `It's ${playerTurn} turn`;
  }
});

//Funcionalidade dos Botões
btn.forEach((btnKey) => {
  btnKey.addEventListener("click", (ev) => {
    const clickedBtn = ev.currentTarget;
    const boardClicked = clickedBtn.dataset.index;
    if (playerTurn !== "") {
      if (playerTurn === player1) {
        if (board[boardClicked] === "") {
          board[boardClicked] = "X";
          clickedBtn.innerText = "X";
        }
      } else {
        if (board[boardClicked] === "") {
          board[boardClicked] = "O";
          clickedBtn.innerText = "O";
        }
      }

      let gameWin = verifyWin();
      if (gameWin.length > 0) {
        winner.innerText = `${playerTurn} wins the game`;
        playerTurn = "";
        playerTurnText.innerHTML = "";
        gameWin.forEach((index) => {
          document
            .querySelector('[data-index="' + index + '"]')
            .classList.add("winner");
        });
      } else if (board.includes("")) {
        playerTurn = playerTurn === player1 ? player2 : player1;
        playerTurnText.innerHTML = `It's ${playerTurn} turn`;
      } else {
        winner.innerText = "EMPATE";
      }
    }
  });
});

//Restart Game
document.getElementById("restartGame").addEventListener("click", () => {
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
  player1 = "";
  player2 = "";
  playerTurn = "";
  playerTurnText.innerHTML = "";
  winner.innerText = ``;
  btn.forEach((buttons, index) => {
    buttons.innerText = "";
    board[index] = "";
    buttons.classList.remove("winner");
  });
});

function verifyWin() {
  boardWin = [];
  if (
    board[0] &&
    board[0] == board[1] &&
    board[0] == board[2] &&
    board[1] == board[2]
  ) {
    boardWin.push("0", "1", "2");
  }
  if (
    board[3] &&
    board[3] == board[4] &&
    board[3] == board[5] &&
    board[4] == board[5]
  ) {
    boardWin.push("3", "4", "5");
  }
  if (
    board[6] &&
    board[6] == board[7] &&
    board[6] == board[8] &&
    board[7] == board[8]
  ) {
    boardWin.push("6", "7", "8");
  }
  if (
    board[0] &&
    board[0] == board[3] &&
    board[0] == board[6] &&
    board[3] == board[6]
  ) {
    boardWin.push("0", "3", "6");
  }
  if (
    board[1] &&
    board[1] == board[4] &&
    board[1] == board[7] &&
    board[4] == board[7]
  ) {
    boardWin.push("1", "4", "7");
  }
  if (
    board[2] &&
    board[2] == board[5] &&
    board[2] == board[8] &&
    board[5] == board[8]
  ) {
    boardWin.push("2", "5", "8");
  }
  if (
    board[0] &&
    board[0] == board[4] &&
    board[0] == board[8] &&
    board[4] == board[8]
  ) {
    boardWin.push("0", "4", "8");
  }
  if (
    board[2] &&
    board[2] == board[4] &&
    board[2] == board[6] &&
    board[4] == board[6]
  ) {
    boardWin.push("2", "4", "6");
  }
  return boardWin;
}
