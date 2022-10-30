const dayjs = require("dayjs");

function birthday(dateBirthday) {
  today = dayjs();
  dateBirthday = dayjs(dateBirthday);
  age = today.diff(dateBirthday, "year");
  const nextBirthday = dateBirthday.add(age + 1, "year");
  const daysToBirthday = nextBirthday.diff(today, "day") + 1;
  console.log(`Atualmente você possui ${age} anos,
Seu proximo aniversario será ${nextBirthday.format("DD/MM/YYYY")},
Faltam ${daysToBirthday} dias!!`);
}

birthday("1999-04-12");
