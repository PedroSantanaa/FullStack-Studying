function showinfo() {
  let name = document.querySelector("input[name='name']").value;
  let favoriteColor = document.querySelector(
    "select[name='color'] option:checked"
  ).text;
  let likeProgramming = document.querySelector(
    "input[name='like-programming']:checked"
  ).value;
  let developerOptions = document.querySelectorAll(
    "input[name='developer-options']:checked"
  );
  let optionsValue = [];
  developerOptions.forEach((element) => {
    optionsValue.push(element.value);
  });
  let optionsChecked = optionsValue.join(",");
  alert(`Nome:${name}
Cor Favorita: ${favoriteColor.toUpperCase()}
Gosta de programar? ${likeProgramming.toUpperCase()}
Conhecimentos em programação: ${optionsChecked.toUpperCase()}`);
}
