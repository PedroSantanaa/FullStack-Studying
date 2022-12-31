//Function to render the transactions at the HTML
function renderTransactions(transactions) {
  //Create div to each transaction
  const transaction = document.createElement("div");
  transaction.classList.add(`transaction`);
  transaction.id = `transaction-${transactions?.id}`;
  //Create transaction reason
  const reason = document.createElement("h3");
  reason.classList.add("transaction-reason");
  reason.textContent = `${transactions?.reason}`;
  //Create transaction value
  const value = document.createElement("h3");
  value.classList.add("transaction-value");
  value.textContent = `${transactions?.value}`;
  //Create edit icon
  const edit = new Image(20, 20);
  edit.src = "./img/editar.png";
  edit.id = "edit-icon";
  //Edit event
  edit.addEventListener("click", editTransaction);
  //Create delete icon
  const delet = new Image(20, 20);
  delet.src = "./img/escluir.png";
  delet.id = "delet-icon";
  //Delete event
  delet.addEventListener("click", deleteTransaction);
  value.append(edit, delet);
  //Put all 2 at the div
  transaction.append(reason, value);
  //Put at the div transactions
  document.querySelector(".transactions").appendChild(transaction);
}

//Async function to GET
async function fetchTransGET() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );
  transactions.forEach(renderTransactions);
  transactions.forEach(valueUpdate);
}
document.addEventListener("DOMContentLoaded", () => fetchTransGET());
document.addEventListener("DOMContentLoaded", () => valueUpdate());

//async function to POST
form = document.querySelector("form");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const transactionData = {
    reason: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
  };
  if (transactionData.reason === "" || transactionData.value === "") {
  } else {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });
    const postedTransaction = await response.json();
    form.reset();
    renderTransactions(postedTransaction);
    valueUpdate(postedTransaction);
  }
});

//async function to DELETE
async function transactionDelete(transctionDeleted) {
  //Deletar do banco de dados
  await fetch(`http://localhost:3000/transactions/${transctionDeleted.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transctionDeleted),
  });
  //Atualizado o valor
  valueUpdate(transctionDeleted);
}

//Delete function
function deleteTransaction(ev) {
  //Get the target
  const target = ev.currentTarget.parentNode.parentNode;
  const id = ev.currentTarget.parentNode.parentNode.id.match(/\d+/gm);
  //Create a object to exclude
  const transctionDeleted = {
    id: parseInt(id),
    value: ev.currentTarget.parentNode.textContent * -1,
  };
  //Deleting from html
  const element = document.querySelector(".transactions");
  element.removeChild(target);
  //Call function to DELETE
  transactionDelete(transctionDeleted);
}

//async function to PATCH
async function transactionPatch(transactionPatch) {
  await fetch(`http://localhost:3000/transactions/${transactionPatch.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionPatch),
  });
}
//Function to PATCH
function editTransaction(ev) {
  //Get the target
  const target = ev.currentTarget.parentNode.parentNode;
  //Edit reason and value
  const editReason = prompt("New Reason:");
  const editValue = prompt("New Value");
  if (editReason === "" || editValue === "") {
  } else {
    const editedTransaction = {
      id: ev.currentTarget.parentNode.parentNode.id.match(/\d+/gm),
      reason: editReason,
      value: editValue,
    };
    //Edit reason and value html
    target.firstChild.textContent = editedTransaction.reason;
    target.lastChild.textContent = editedTransaction.value;

    //PATCH at DB
    transactionPatch(editedTransaction);

    document.location.reload(true);
  }
}
//Function to get and maintain the value updated
let totalValue = 0;
function valueUpdate(transaction = { value: "0" }) {
  const value = document.getElementById("amount");
  totalValue += parseFloat(transaction.value);
  if (totalValue === 0) {
    value.textContent = `Amount:R$0`;
  } else {
    value.textContent = `Amount:R$${totalValue}`;
  }
}
