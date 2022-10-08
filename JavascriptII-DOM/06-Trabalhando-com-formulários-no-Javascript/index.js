//Pegando o formulario
const form = document.getElementById("orderForm");
//Adicionar um event de submit no form
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  //Input de nome
  const name = document.querySelector("input[name='name']").value;
  //Input do endereço
  const address = document.querySelector("input[name='address']").value;
  //Input de um select
  const breadType = document.querySelector("select[name='breadType']").value;
  //Input de um radio
  const main = document.querySelector("input[name='main']").value;
  //Input de area
  const observation = document.querySelector(
    "textarea[name='observations']"
  ).value;
  //Inputs de uma checkboxs
  let salad = [];
  document.querySelectorAll("input[name='salad']:checked").forEach((item) => {
    salad += ` - ${item.value} \n`;
  });
  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "Observações: " +
      observation
  );
});
