function addContact() {
  //Pegando a section de contatos
  const contactSection = document.getElementById("contacts-list");
  //Criando um h3 e colocando um texto
  const h3 = document.createElement("h3");
  h3.innerText = "Contato";
  //Criando uma lista para colocar as informações dos contatos
  const ul = document.createElement("ul");
  //Criando um li para o nome
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  //Criando um input de nome
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  //Colocando o input no li de nome
  nameLi.appendChild(nameInput);
  //Colocando o li na ul
  ul.appendChild(nameLi);

  //Criando um li para o numero
  const numberLi = document.createElement("li");
  numberLi.innerText = "Telefone: ";
  //Criando um input de número
  const numberInput = document.createElement("input");
  numberInput.type = "text";
  numberInput.name = "fullnumber";
  //Colocando o input no li de numero
  numberLi.appendChild(numberInput);
  //Colocando o li na ul
  ul.appendChild(numberLi);

  //Criando um li para o endereço
  const adressLi = document.createElement("li");
  adressLi.innerText = "Endereço: ";
  //Criando um input de endereço
  const adressInput = document.createElement("input");
  adressInput.type = "text";
  adressInput.name = "adress";
  //Colocando o input no li de endereço
  adressLi.appendChild(adressInput);
  //Colocando o li na ul
  ul.appendChild(adressLi);

  //Colocando tudo dentro da section
  contactSection.append(h3, ul);
}
function removeContact() {
  const contactSection = document.getElementById("contacts-list");
  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");
  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
