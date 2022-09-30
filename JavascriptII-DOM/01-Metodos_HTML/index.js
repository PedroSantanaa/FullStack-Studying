function show() {
  //Elemento unico pelo Id
  const contact_list = document.getElementById("contact-list");
  console.log(contact_list);
  //Varios elementos
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);
  //Elementos pelo nome da classe
  const classList = document.getElementsByClassName("contact-input");
  console.log(classList);
  //Mais especifico
  const contacts = document.querySelectorAll("#contact-list>li>label");
  console.log(contacts);
  //Por nome
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);
  //Outra forma do query para unico elemento
  const firstContact = document.querySelector("#contact-list>li>label");
  console.log(firstContact);
}
