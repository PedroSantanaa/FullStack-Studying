let firstCharacter = prompt("Nome do personagem:");
let powerOfFirst = parseFloat(prompt("Poder do personagem:"));
let secondCharacter = prompt("Nome do personagem:");
let lifeOfSecond = parseFloat(prompt("Vida do personagem:"));
let defenseOfSecond = parseFloat(prompt("Defesa do personagem:"));
const shield = confirm("O personagem possui escudo?");
let damage = powerOfFirst - defenseOfSecond;
if (powerOfFirst > defenseOfSecond && shield == false) {
  lifeOfSecond -= damage;
} else if (powerOfFirst > defenseOfSecond && shield == true) {
  damage /= 2;
  lifeOfSecond -= damage;
} else if (powerOfFirst <= defenseOfSecond) {
  lifeOfSecond -= damage;
}
alert(`Dano causado: ${damage}\n
${firstCharacter} com poder:${powerOfFirst}\n
${secondCharacter} com defesa:${defenseOfSecond} e vida:${lifeOfSecond}`);
