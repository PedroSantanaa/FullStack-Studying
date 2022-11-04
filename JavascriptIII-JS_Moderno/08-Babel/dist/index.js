"use strict";

function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var somaTotal = numbers.reduce(function (soma, number) {
    return soma + number;
  }, 0);
  var mediaTotal = somaTotal / numbers.length;
  return mediaTotal;
}
function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var somaTotal = numbers.reduce(function (soma, number) {
    var _number$p;
    return soma + number.n * ((_number$p = number.p) !== null && _number$p !== void 0 ? _number$p : 1);
  }, 0);
  var pesoTotal = numbers.reduce(function (soma, number) {
    var _number$p2;
    return soma + ((_number$p2 = number.p) !== null && _number$p2 !== void 0 ? _number$p2 : 1);
  }, 0);
  var mediaPonderadaTotal = somaTotal / pesoTotal;
  return mediaPonderadaTotal;
}
function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  // Tamanho par, mediana= media((numbers[length/2],numbers[length/2+1])
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var med = 0;
  if (orderedNumbers.length % 2 === 0) {
    med = media(orderedNumbers[orderedNumbers.length / 2], orderedNumbers[orderedNumbers.length / 2 - 1]);
  } else {
    med = orderedNumbers[Math.ceil(orderedNumbers.length / 2) - 1];
  }
  return med;
}
function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
}
console.log(media(2, 6, 3, 7, 4));
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(2, 5, 99, 4, 42, 7));
console.log(mediana(15, 14, 8, 7, 3));
console.log(moda(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));