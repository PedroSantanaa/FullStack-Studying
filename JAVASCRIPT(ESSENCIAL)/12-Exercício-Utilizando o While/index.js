let spaceship = prompt("Nome da nave:");
let option = prompt("Deseja entrar em dobra espacial? \n1-Sim \n2-Não");
let dobra = 0;
while (option == "1") {
  option = prompt("Deseja entrar em dobra espacial novamente? \n1-Sim \n2-Não");
  dobra += 1;
}

alert(`Nome da nave:${spaceship}\n Dobras:${dobra}`);
