//decorator

function Decorator() {
  return function (target, key, descriptor) {
    console.log("Chamando o Decorator");
  };
}

class Planet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Decorator()
  calcular(value: number) {
    return value * 2;
  }
}

const planet = new Planet("Terra");
const result = planet.calcular(5);
console.log(`Resultado ${result}`);
