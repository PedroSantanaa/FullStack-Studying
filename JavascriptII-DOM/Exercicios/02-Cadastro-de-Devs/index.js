const form = document.getElementById("devRegister");
const btn = document.getElementById("addTechnology");
let cont = 1;
btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const divLine = document.createElement("div");
  divLine.id = `Line${cont}`;
  const divInputs = document.getElementById("newInputs");
  console.log(divInputs);
  const label1 = document.createElement("label");
  label1.innerText = "\n\nTecnologia:";
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.id = `technology${cont}`;
  const labelRadio = document.createElement("label");
  labelRadio.innerText = "\nTempo de experiencia:  ";
  const label2 = document.createElement("label");
  label2.innerText = "0-2 anos ";
  const input2 = document.createElement("input");
  input2.type = "radio";
  input2.name = `expTime${cont}`;
  input2.value = "0-2anos";
  const label3 = document.createElement("label");
  label3.innerText = "  2-5 anos ";
  const input3 = document.createElement("input");
  input3.type = "radio";
  input3.value = "2-5anos";
  input3.name = `expTime${cont}`;
  const label4 = document.createElement("label");
  label4.innerText = "  5+ anos\n";
  const input4 = document.createElement("input");
  input4.type = "radio";
  input4.value = "5+anos";
  input4.name = `expTime${cont}`;
  const removeBtn = document.createElement("button");
  removeBtn.id = `remove${cont}`;
  removeBtn.innerText = "Remover linha";
  removeBtn.addEventListener("click", (ev) => {
    const remove = document.querySelectorAll("div div");
    divInputs.removeChild(remove[remove.length - 2]);
    cont -= 1;
  });
  divLine.append(
    label1,
    input1,
    labelRadio,
    input2,
    label2,
    input3,
    label3,
    input4,
    label4,
    removeBtn
  );
  divInputs.appendChild(divLine);
  cont += 1;
});
let Devs = [];
form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  for (let i = 1; i < cont; i++) {
    const name = document.getElementById(`fullName`).value;
    const technology = document.getElementById(`technology${i}`).value;
    const radioItem = document.querySelector(`input[name='expTime${i}']`).value;
    Devs.push(name, technology, radioItem);
    document.getElementById(`fullName`).value = "";
    document.getElementById(`technology${i}`).value = "";
    document.querySelector(`input[name='expTime${i}']:checked`).checked = false;
  }

  console.log(Devs);
});
