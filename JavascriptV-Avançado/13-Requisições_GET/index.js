function createCountryCard(country) {
  //Criando uma div pro país
  const card = document.createElement("div");
  card.classList.add("country");
  //Nome do país
  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;
  //Bandeira
  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;
  //Colocando na div criada
  card.append(name, flag);
  //Colocando na div do html
  document.querySelector("#countries").append(card);
}
async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  countries.forEach(createCountryCard);
}
getCountries();
