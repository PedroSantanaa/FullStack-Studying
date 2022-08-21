function divide(num) {
  console.log(num);
  if (num % 2 === 0) {
    divide(num / 2);
  } else {
    return num;
  }
}
divide(60);
//Perigos
function double(num) {
  console.log(num);
  // double(num * 2);
}
//Fatoração
function fatorial(num) {
  console.log("Número " + num);
  if (num === 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

let num = fatorial(1);
console.log(num);
