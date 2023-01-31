let planets = [];
function createPlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        sat: [],
    };
    planets.push(planet);
    return planet;
}
function findPlanet(name) {
    let planet;
    planet = planets.find((planet) => {
        return planet.name === name;
    });
    return planet;
}
function attSituation(situation, planet) {
    planet.situation = situation;
}
function addSat(satName, planet) {
    planet.sat.push(satName);
}
function removeSat(name, planet) {
    planet.sat = planet.sat.filter((sat) => sat !== name);
}
function promptValidSituation() {
    let situationNow;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado");
        switch (situationInput) {
            case "1":
                situationNow = "habitado";
                validSituation = true;
                break;
            case "2":
                situationNow = "habitavel";
                validSituation = true;
                break;
            case "3":
                situationNow = "habitavel";
                validSituation = true;
                break;
            case "4":
                situationNow = "inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida!");
                break;
        }
    }
    return situationNow;
}
function firstMenuOption() {
    const planetName = prompt("Nome do planeta");
    const situation = promptValidSituation();
    const x = Number(prompt("Coordernada X do planeta"));
    const y = Number(prompt("Coordernada Y do planeta"));
    const z = Number(prompt("Coordernada Z do planeta"));
    const w = Number(prompt("Coordernada W do planeta"));
    const confirmation = confirm(`Confirma o registro do planeta ${planetName}?\n coordenadas: [${x},${y},${z},${w}]\nSituação: ${situation}`);
    if (confirmation) {
        createPlanet(planetName, [x, y, z, w], situation);
    }
}
function secondMenuOption() {
    const planetName = prompt("Qual nome do planeta??");
    const situation = promptValidSituation();
    const planet = findPlanet(planetName);
    if (planet) {
        const confirmation = confirm(`Mudar a situação para ${situation}?`);
        if (confirmation) {
            attSituation(situation, planet);
        }
    }
}
function thirdMenuOption() {
    const planetName = prompt("Qual nome do planeta??");
    const satName = prompt("Qual nome do satelite");
    const planet = findPlanet(planetName);
    if (planet) {
        const confirmation = confirm(`Confirma o satelite ${satName} no planeta ${planet.name} ?`);
        if (confirmation) {
            addSat(satName, planet);
        }
    }
}
function fourthMenuOption() {
    const planetName = prompt("Qual nome do planeta??");
    const satName = prompt("Qual nome do satelite");
    const planet = findPlanet(planetName);
    if (planet) {
        const confirmation = confirm(`Excluir o satelite ${satName} do planeta ${planet.name} ?`);
        if (confirmation) {
            removeSat(satName, planet);
        }
    }
}
function fiveMenuOption() {
    let info = "-----Os planetas são-----\n";
    planets.map((planet) => {
        info += `O planeta ${planet.name}
           com coordenadas em ${planet.coordinates}
           com situação atual: ${planet.situation}
           e seus satelites são: ${planet.sat}`;
    });
    alert(info);
}
/**
 * Menu
 */
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Registrar um novo planeta
    2 - Atualizar situação de um planeta
    3 - Adicionar um satelite
    4 - Remover um satelite
    5 - Listar os planets
    6 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fiveMenuOption();
            break;
        case 6:
            alert("Encerrando aplicação");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
