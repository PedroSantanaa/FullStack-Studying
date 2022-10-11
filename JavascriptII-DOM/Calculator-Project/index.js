//Selecionando as variaveis
const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

//Criando um array para ter apenas os caracteres permitidos
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

//Adicionando funcionalidade nos botoes
document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", (ev) => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});
//Adicionando funcionalidade ao botão de clear
document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  resultInput.value = "";
  resultInput.classList.remove("error");
  input.focus();
});
//Adicionando funcionalidade ao botão de =
document.getElementById("equal").addEventListener("click", calculate);

//Adicionando evento no input
input.addEventListener("keydown", (ev) => {
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
});

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

//Adicionando funcionalidade a troca de tema
document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

//Adicionando funcionalidade ao botão de copy
document.getElementById("copyToClipboard").addEventListener("click", (ev) => {
  const buttonCopy = ev.currentTarget;
  if (buttonCopy.innerText === "Copy") {
    buttonCopy.innerText = "Copied!!";
    buttonCopy.classList.add("success");
    window.navigator.clipboard.writeText(resultInput.value);
  } else {
    buttonCopy.innerText = "Copy";
    buttonCopy.classList.remove("success");
  }
});
