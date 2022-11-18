class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 120;

  static showBaseFee() {
    console.log(`A taxa de reserva é ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();
const room101 = new Reservation(4, "101", 4);
console.log(room101);
console.log(`Premium Fee is $${Reservation.premiumFee}`);
