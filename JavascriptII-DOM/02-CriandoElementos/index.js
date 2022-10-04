function addInput() {
  const ul = document.getElementById("inputs");
  //Criando um elemento li na ul
  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input:";
  //Criando um elemento input para o li
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";
  //Colocando o input no li
  newLi.appendChild(newInput);
  //Colocando o li no ul
  ul.appendChild(newLi);
}
