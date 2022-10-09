function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}
function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

ligthBtn = document
  .getElementById("lightBtn")
  .addEventListener("click", useLightTheme);
darkBtn = document
  .getElementById("darkBtn")
  .addEventListener("click", useDarkTheme);
switchBtn = document
  .getElementById("switchBtn")
  .addEventListener("click", switchTheme);
