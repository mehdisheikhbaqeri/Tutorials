const CantDeg = document.querySelector(".C");
const FarenDeg = document.querySelector(".F");
const converter = document.querySelector(".converte");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");

function conver() {}
function reset() {}
function change() {
  if (CantDeg.innerHTML === "°C") {
    CantDeg.innerHTML = "°F";
    FarenDeg.innerHTML = "°C";
    // converter.setAttribute("placeholder", "°F");
    document.title = "°F to °C";
  } else {
    CantDeg.innerHTML = "°F";
    FarenDeg.innerHTML = "°C";
    // converter.setAttribute("placeholder", "°C");
    document.title = "°C to °F";
  }
}

convertButton.addEventListener("click", converter);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);
