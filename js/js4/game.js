let guss = parseInt(prompt("guss a number:"));
const randonNum = Math.floor(Math.random() * 2) + 1;

while (guss !== randonNum) {
  if (guss < randonNum) {
    guss = parseInt(prompt("the number is grater:"));
  } else {
    guss = parseInt(prompt("the number us less:"));
  }
}
alert(`braaavoooo ${guss} true`);
