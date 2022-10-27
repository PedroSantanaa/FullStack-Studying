const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// console.log(user.friends[0].phone.ddd);
//Opcional
console.log(user?.friends[0]);
console.log(user?.friends[0]?.phone);
console.log(user?.friends[0]?.phone?.ddd);
