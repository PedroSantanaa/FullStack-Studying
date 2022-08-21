//Metodo dos arrays
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//Map
//Transformação em Arrays
//Como funciona o map
const nomes = [];
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
}
console.log(nomes);

//Com o map
const nomesMap = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomesMap);

//Filter

const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca == "Orc") {
    orcs.push(personagens[i]);
  }
}
console.log(orcs);

const orcsFilter = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});
console.log(orcsFilter);

//Reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);
console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {});

console.log(racas);

//Sort
//Comparação em pares
//1,2,4,7,3,0
//(1,2).(2,4)...
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagens);

//Com slice n altera o array
