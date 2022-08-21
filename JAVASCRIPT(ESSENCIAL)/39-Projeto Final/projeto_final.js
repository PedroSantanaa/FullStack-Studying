function menu() {
  let option;
  option = prompt(
    "Sistemas de Vagas de Emprego:\n1-Vagas Disponíveis\n2-Criar nova vaga\n3-Visualizar uma vaga\n4-Inscrever candidato\n5-Excluir vaga\n6-Sair"
  );
  return option;
}

function criarVagas(vagas) {
  let nome = prompt("Nome da vaga:");
  let descricao = prompt("Descrição da vaga:");
  let data = prompt("Vaga limite(DD/MM/AAAA):");
  let confirmacao = confirm(
    `Confirme a vaga para cadastro:\nNome:${nome}\nDescrição:${descricao}\nData limite:${data}`
  );
  if (confirmacao) {
    let vaga = {};
    vaga.nome = nome;
    vaga.descricao = descricao;
    vaga.data = data;
    vaga.candidato = new Array();
    vagas.push(vaga);
  } else {
    alert("Cadastre novamente...");
    criarVagas();
  }
  return vagas;
}

function listarVagas(vagas) {
  if (vagas.length !== 0) {
    vagas.forEach((vaga, index) => {
      alert(
        `${index + 1}:${vaga.nome},Número de candidatos:${
          vaga.candidato.length
        }`
      );
    });
  } else {
    alert("Não há vagas disponiveis");
  }
}

function inscreverCandidato(vagas) {
  let candidato = prompt("Nome do candidato(a):");
  let indice = parseInt(prompt("Indice da vaga:"));
  vagas.forEach((vaga, index) => {
    if (index === indice - 1) {
      if (confirm(`Vaga:${vaga.nome}\n${vaga.descricao}\n${vaga.data}`)) {
        vaga.candidato.push(candidato);
      }
    }
  });
}

function deletarVaga(vagas) {
  let indice = parseInt(prompt("Indice da vaga a ser excluida:"));
  vagas.forEach((vaga, index) => {
    if (indice - 1 === index) {
      if (
        confirm(
          `Deseja excluir a vaga ${indice}:Titulo:${vaga.nome}\nDescrição:${vaga.descricao}\nData Limite:${vaga.data}\nNúmero de candidatos:${vaga.candidato.length}\nCandidatos:${vaga.candidato}`
        )
      ) {
        vagas.splice(index, 1);
      }
    }
  });
  return vagas;
}
function visualizarVaga(vagas) {
  let indice = parseInt(prompt("Indice da vaga:"));
  vagas.forEach((vaga, index) => {
    if (indice - 1 === index) {
      alert(
        `Vaga ${indice}:Titulo:${vaga.nome}\nDexcrição:${vaga.descricao}\nData Limite:${vaga.data}\nNúmero de candidatos:${vaga.candidato.length}\nCandidatos:${vaga.candidato}`
      );
    }
  });
}

function main() {
  let vagas = [];
  let option = "";
  while (option !== "6") {
    option = menu();
    switch (option) {
      case "1":
        listarVagas(vagas);
        break;
      case "2":
        vagas = criarVagas(vagas);
        break;
      case "3":
        visualizarVaga(vagas);
        break;
      case "4":
        inscreverCandidato(vagas);
        break;
      case "5":
        deletarVaga(vagas);
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Número escolhido invalido, escolha novamento!!");
        main();
        break;
    }
  }
}

main();
