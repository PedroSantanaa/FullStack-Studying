async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
}
const sumResult = asyncSum(50, 33);
const subResult = asyncSubtract(50, 12);
Promise.all([sumResult, subResult])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
