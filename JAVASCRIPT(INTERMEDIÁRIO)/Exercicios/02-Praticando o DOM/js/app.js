class App {
  constructor() {
    this.imovel = null;
  }

  save() {
    let type = document.querySelector("select[name='typeof']").value;
    let area = document.querySelector("input[name='area']").value;
    let situation = document.querySelector(
      "select[name='rented-or-not']"
    ).value;
    this.imovel = new Imovel(type, area, situation);
    console.log(this.imovel);
    this.list();
    this.cleanForm();
  }

  list() {
    event.preventDefault();
    let liList = document.createElement("li");
    liList.setAttribute("id", "itemImovel");
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remover Imóvel";
    removeButton.type = "button";
    removeButton.setAttribute("class", "btn btn-danger");
    removeButton.setAttribute("onclick", "remove(this)");

    if (this.imovel.situation === "Rented") {
      let rentedMarked = document.createElement("span");
      rentedMarked.style.color = "white";
      rentedMarked.style.backgroundColor = "red";
      rentedMarked.innerText = "Rented:";
      liList.appendChild(rentedMarked);
      liList.innerHTML += `${this.imovel.type} with area of ${this.imovel.area}m²`;
    } else {
      liList.innerHTML += `${this.imovel.type} com area de ${this.imovel.area}m²`;
    }
    liList.appendChild(removeButton);

    document.getElementById("listaImoveis").appendChild(liList);
  }
  remove(button) {
    event.preventDefault();
    let liToRemove = event.target.parentNode;
    document.getElementById("listaImoveis").removeChild(liToRemove);
  }

  cleanForm() {
    document.querySelector("input[name='area']").value = "";
  }
}
