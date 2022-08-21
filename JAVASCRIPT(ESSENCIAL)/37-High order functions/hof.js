function calcular(a, b, operacao) {
  console.log("Realizando um operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando um subtração");
    return x - y;
  })
);

//Dia a dia

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça", "Banana", "Laranja", "Limão"];
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

//Metodo dos arrays
lista.forEach(exibirElemento);
