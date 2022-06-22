let bulbbing = document.getElementById("bulb");
let btn = document.getElementById("btn");
let bulbFlag = false;

function turnOnOff() {
  if (bulbFlag) {
    bulbbing.setAttribute("src", "./pic/off.png");
    bulbFlag = false;
    btn.innerText = "Turn On";
  } else {
    bulbbing.setAttribute("src", "./pic/on.jpg");
    bulbbing.setAttribute("alt", "Turn On");
    bulbFlag = true;
    btn.innerText = "Turn Off";
  }
}
