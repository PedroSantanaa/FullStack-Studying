async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Must be only numbers");
  } else {
    return a + b;
  }
}
//Metodo tradicional
async function execute() {
  asyncSum(20, 22)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
}

//Metodo com await
async function awaitExecute() {
  try {
    const result = await asyncSum(null, 22);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
execute();
awaitExecute();
