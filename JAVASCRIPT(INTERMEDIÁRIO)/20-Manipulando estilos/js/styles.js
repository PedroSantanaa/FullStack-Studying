function setbluebackground() {
  let element = document.getElementById("style-text");
  console.log(typeof element);
  element.style.backgroundColor = "blue";
  element.style.color = "white";
}

function settransparentbackground() {
  let element = document.getElementById("style-text");
  element.style.backgroundColor = "transparent";
  element.style.color = "black";
}

function setredcolor() {
  let element = document.getElementById("style-text");
  element.classList.add("red-color");
}

function removeredcolor() {
  let element = document.getElementById("style-text");
  element.classList.remove("red-color");
}
