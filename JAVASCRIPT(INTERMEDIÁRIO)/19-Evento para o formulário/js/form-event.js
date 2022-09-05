function save(event) {
  event.preventDefault();
  let name = document.querySelector("input[name='name']").value;
  let programmingLanguage = document.querySelector(
    "select[name='programming-lang']"
  ).value;
  alert(`Nome:${name}
Programa em:${programmingLanguage}`);
}
