import { calculate } from "./calculate.js";

//Adicionando funcionalidade nos botoes
function buttons(ev) {
  const input = document.getElementById("input");
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}
//Adicionando funcionalidade ao botão de clear
function clear() {
  const input = document.getElementById("input");
  const resultInput = document.getElementById("result");
  input.value = "";
  resultInput.value = "";
  resultInput.classList.remove("error");
  input.focus();
}

//Adicionando evento no input
function inputs(ev) {
  const input = document.getElementById("input");
  const allowedChar = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  ev.preventDefault();
  //Um if para verificar se a tecla pressionada está nas teclas permitidas
  if (allowedChar.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}

export { buttons, clear, inputs };
