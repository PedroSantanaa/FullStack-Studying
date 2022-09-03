class House {
  constructor(number, bairro, city, area) {
    this.number = number;
    this.bairro = bairro;
    this.city = city;
    this.area = area;
  }

  listingHouse() {
    let list = document.createElement("li");
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remover Casa";
    let listing = `Número:${this.number},
    Bairro:${this.bairro},
    Cidade:${this.city},
    Área:${this.area}m²`;
    let listingLI = document.createTextNode(listing);
    list.appendChild(listingLI);
    let form = document.querySelector("form");
    form.appendChild(list);
    list.setAttribute("id", "HouseLists");
    form.appendChild(removeButton);
    removeButton.setAttribute("onclick", "removeHouse(event)");
    removeButton.setAttribute("id", "removeButton");
  }
}

function addHouse(event) {
  event.preventDefault();
  const numberHouse = document.getElementById("numberHouse").value;
  const bairroHouse = document.getElementById("bairro").value;
  const cityHouse = document.getElementById("city").value;
  const areaHouse = document.getElementById("houseArea").value;
  let houses = new House(numberHouse, bairroHouse, cityHouse, areaHouse);
  houses.listingHouse();
}
function removeHouse(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let removeHouse = document.getElementById("HouseLists");
  let removeButton = document.getElementById("removeButton");
  form.removeChild(removeHouse);
  form.removeChild(removeButton);
}
