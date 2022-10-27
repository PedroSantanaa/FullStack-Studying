const a = 0;
const b = null;
const c = "Teste";

//OU logico
console.log(a || b || c);
//Coalescencia
console.log(a ?? b ?? c);
console.log(a ?? b);
console.log(b ?? c);
