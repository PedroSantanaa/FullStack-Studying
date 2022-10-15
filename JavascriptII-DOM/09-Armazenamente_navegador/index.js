//Session Storage
document.getElementById("sessionBtn").addEventListener("click", () => {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
document.getElementById("readSesssion").addEventListener("click", () => {
  const info = sessionStorage.getItem("info");
  alert(`A informação salva foi: ${info}`);
});
//Local Storage
document.getElementById("localBtn").addEventListener("click", () => {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});
document.getElementById("readLocal").addEventListener("click", () => {
  const text = localStorage.getItem("text");
  alert(`A informação salva foi: ${text}`);
});
//Cookies
document.getElementById("cookieBtn").addEventListener("click", () => {
  const input = document.getElementById("cookie");
  const cookie = `info=${input.value};`;
  const expires = `expires${new Date(2022, 10, 16)};`;
  const path = "path/;";
  document.cookie = cookie + expires + path;
  input.value = "";
});
document.getElementById("cookie2Btn").addEventListener("click", () => {
  const text = localStorage.getItem("text");
  alert(`A informação salva foi: ${text}`);
});
