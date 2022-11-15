class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}
class Apartment extends Property {
  constructor(area, price, number) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const land = new Property(200000, 20000000);
const house = new House(100000, 10000000);
const apartment = new Apartment(200000, 20000000, "201");

console.log(land);
console.log(house);
console.log(house.getPricePerSquareMeter());
console.log(house instanceof Property);
console.log(apartment);
console.log(apartment.getFloor());
