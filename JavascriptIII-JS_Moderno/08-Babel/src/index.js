function media(...numbers) {
  const somaTotal = numbers.reduce((soma, number) => soma + number, 0);
  const mediaTotal = somaTotal / numbers.length;
  return mediaTotal;
}
function mediaPonderada(...numbers) {
  const somaTotal = numbers.reduce(
    (soma, number) => soma + number.n * (number.p ?? 1),
    0
  );
  const pesoTotal = numbers.reduce((soma, number) => soma + (number.p ?? 1), 0);
  const mediaPonderadaTotal = somaTotal / pesoTotal;
  return mediaPonderadaTotal;
}
function mediana(...numbers) {
  // Tamanho par, mediana= media((numbers[length/2],numbers[length/2+1])
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  let med = 0;
  if (orderedNumbers.length % 2 === 0) {
    med = media(
      orderedNumbers[orderedNumbers.length / 2],
      orderedNumbers[orderedNumbers.length / 2 - 1]
    );
  } else {
    med = orderedNumbers[Math.ceil(orderedNumbers.length / 2) - 1];
  }
  return med;
}
function moda(...numbers) {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
}

console.log(media(2, 6, 3, 7, 4));
console.log(mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(2, 5, 99, 4, 42, 7));
console.log(mediana(15, 14, 8, 7, 3));
console.log(
  moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
);
