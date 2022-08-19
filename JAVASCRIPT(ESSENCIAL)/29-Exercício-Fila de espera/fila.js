let queue = [];
let newPatient = "";
let noMorePatient = "";
let option = "";
do {
  option = prompt(
    "Bem vindo a clinica\nMenu interativo\n1-Fila de pacientes\n2-Novo paciente\n3-Consultar paciente\n4-Sair"
  );
  switch (option) {
    case "1":
      let allPatients = "";
      for (let i = 0; i < queue.length; i++) {
        const element = queue[i];
        allPatients += `${i + 1}º:${element}\n`;
      }
      alert(allPatients);
      break;
    case "2":
      newPatient = prompt("Nome do paciente: ");
      queue.push(newPatient);
      break;
    case "3":
      noMorePatient = queue.shift();
      if (!noMorePatient) {
        alert("Não há mais pacientes");
      } else {
        alert(`O paciente ${noMorePatient} entrou para consulta`);
      }

      break;
    case "4":
      alert("Encerrando o menu, muito obrigado!!");
  }
} while (option !== "4");
