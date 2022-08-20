function average(a = 0, b = 0) {
  const average = (a + b) / 2;
  return average;
}
const result = average(7, 2);
console.log(result);

function newProduct(name, price) {
  const product = {
    name,
    price,
    estoque: 1,
  };
  return product;
}

const notebook = newProduct("Lenovo", 3600);
console.log(notebook);

function rectangularArea(base, heigth) {
  const area = base * heigth;
  return area;
}
const Area = rectangularArea(3, 6);
