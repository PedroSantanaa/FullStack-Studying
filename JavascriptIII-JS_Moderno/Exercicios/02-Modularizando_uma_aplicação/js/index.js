//Import calculate
import { calculate } from "./calculate.js";
//Import Extra functions
import { switchTheme, copyText } from "./extraFunctions.js";
//Imports buttons Events
import { buttons, clear, inputs } from "./buttonsFunction.js";

//Adicionando funcionalidade nos botoes
document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", buttons);
});
//Adicionando funcionalidade ao botão de clear
document.getElementById("clear").addEventListener("click", clear);
//Adicionando funcionalidade ao botão de =
document.getElementById("equal").addEventListener("click", calculate);

//Adicionando evento no input
document.getElementById("input").addEventListener("keydown", inputs);

//Adicionando funcionalidade a troca de tema
document.getElementById("themeSwitcher").addEventListener("click", switchTheme);

//Adicionando funcionalidade ao botão de copy
document.getElementById("copyToClipboard").addEventListener("click", copyText);
