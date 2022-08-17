let word = prompt("Digite a palavra:");
let backWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  backWord += word[i];
}
if (word === backWord) {
  alert(`A palavra ${word} é um palindromo`);
} else {
  alert(`A palavra ${word} não é um palindromo:\n${word}\n${backWord}`);
}
