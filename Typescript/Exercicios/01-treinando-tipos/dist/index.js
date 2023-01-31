function createSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    return spaceship;
}
function addCrew(name, spaceship) {
    if (spaceship.crew.length <= spaceship.crewLimit) {
        spaceship.crew.push(name);
    }
    else {
        alert("O n\u00FAmero maximo de ".concat(spaceship.crewLimit, " n\u00E3o pode ser excedido"));
    }
}
function sendToMission(spaceship) {
    if (spaceship.inMission === false &&
        spaceship.crew.length >= Math.floor(spaceship.crewLimit) / 3) {
        spaceship.inMission = true;
        alert("A nave ".concat(spaceship.name, " foi mandada em missao"));
    }
    else {
        alert("Nave j\u00E1 em miss\u00E3o ou n\u00E3o possui numero de passageiros suficiente");
    }
}
function showSpaceships() {
    spaceships.map(function (spaceship) {
        alert("A nave ".concat(spaceship.name, " com o piloto ").concat(spaceship.pilot, " e capacidade maxima de ").concat(spaceship.crewLimit, " de tripulantes, possui ").concat(spaceship.crew.length, " tripulante:").concat(spaceship.crew, " e seu estado atual de miss\u00E3o \u00E9:").concat(spaceship.inMission));
    });
}
var spaceships = [];
var mille = createSpaceship("Mille", "pedro", 5);
spaceships.push(mille);
var duke = createSpaceship("duke", "tiago", 5);
spaceships.push(duke);
showSpaceships();
