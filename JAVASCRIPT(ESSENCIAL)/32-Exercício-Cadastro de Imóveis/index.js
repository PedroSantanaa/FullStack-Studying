let option = "";
let properties = [];
names = "";
rooms = 0;
baths = 0;
garage = false;
while (option !== "3") {
  option = prompt(
    `Bem vindo!!\nImóveis cadastrados:${properties.length}\n1-Mostrar todos os imóveis\n2-Salvar um novo imóvel\n3-Sair`
  );
  switch (option) {
    case "1":
      alert(JSON.stringify(properties));
      break;
    case "2":
      let property = {};
      names = prompt("Nome do Proprietário:");
      rooms = parseInt(prompt("Número de quartos:"));
      baths = parseInt(prompt("Número de banheiros:"));
      garage = confirm("Possui garagem??");
      property.name = names;
      property.room = rooms;
      property.bath = baths;
      property.garage = garage;
      properties.push(property);
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Número invalido!!");
      break;
  }
}
