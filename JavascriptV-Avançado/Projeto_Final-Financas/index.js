//Function to render the transactions at the HTML
function renderTransactions(transactions) {
  //Create div to each transaction
  const transaction = document.createElement("div");
  transaction.classList.add(`transaction`);
  transaction.id = `transaction-${transactions?.id}`;
  //Create transaction reason
  const reason = document.createElement("h3");
  reason.classList.add("transaction-reason");
  reason.textContent = `${transactions?.id}-->${transactions?.reason}`;
  //Create transaction value
  const value = document.createElement("h3");
  value.classList.add("transaction-value");
  value.textContent = `R$: ${transactions?.value}`;
  //Create edit icon
  const edit = new Image(20, 20);
  edit.src = "./img/editar.png";
  edit.id = "edit-icon";
  //Create delete icon
  const delet = new Image(20, 20);
  delet.src = "./img/escluir.png";
  delet.id = "delet-icon";
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

//Function to get and maintain the value updated
let totalValue = 0;
function valueUpdate(transaction) {
  const value = document.getElementById("amount");
  totalValue += parseFloat(transaction.value);
  value.textContent = `Amount:R$${totalValue}`;
}

//Delete function
const imgClick = document.getElementById("delet-icon");
imgClick.addEventListener("click", (ev) => {
  const div = ev.target;
  console.log(div);
});
