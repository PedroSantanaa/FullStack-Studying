alert("Type your name and age to proceed to Age Difference");
let name1 = prompt("Name: ");
let age1 = prompt("Age: ");
let name2 = prompt("Name: ");
let age2 = prompt("Age: ");
let ageDiff = Math.abs(age1 - age2);
alert(`Name: ${name1}\nAge: ${age1}`);
alert(`Name: ${name2}\nAge: ${age2}`);
alert(`Age Difference: ${ageDiff}`);
