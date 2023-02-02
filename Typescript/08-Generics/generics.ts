//sem generics
function first(array) {
  return array[0];
}
//generics
function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
  return array[array.length - 1];
}

const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"];

const firstPilot = first(pilots);
const lastPilot = last(pilots);
