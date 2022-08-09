let namePilot = prompt("Name");
let velocity = 0;
let newVelocity = prompt("What velocity you want to set: ");
if (confirm(`New velocity is going to be ${newVelocity}, that's correct?`)) {
  velocity = newVelocity;
}
if (velocity <= 0) {
  alert("Spaceship is stopped, consider starting and set a velocity");
} else if (velocity < 40) {
  alert("You're slow, we can increase more");
} else if (velocity >= 40 && velocity < 80) {
  alert("Seems to be a nice speed to maintain");
} else if (velocity >= 80 && velocity < 100) {
  alert("High velocity, consider to decrease");
} else {
  alert("Dangerous velocity, auto pilot forced");
}

alert(`Pilot ${namePilot} is in a current speed of ${velocity}`);
