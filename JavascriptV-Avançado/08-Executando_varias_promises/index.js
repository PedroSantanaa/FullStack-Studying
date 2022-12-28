function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a - b);
    }
  });
}
const sumResult = asyncSum(50, 33);
const subResult = asyncSubtract(null, 12);
Promise.all([sumResult, subResult])
  .then((results) => {})
  .catch((err) => {
    console.log(err);
  });
