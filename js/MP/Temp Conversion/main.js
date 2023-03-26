const CantDeg = document.querySelector(".C");
const FarenDeg = document.querySelector(".F");
const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");

function convert() {
  if (converter.value === "") {
    result.textContent = "Insert correct value";
    result.style.color = "#992233";
  } else {
    if (CantDeg.textContent === "°C") {
      let finalValue = converter.value * 1.8 + 32;
      result.textContent =
        converter.value + "°C  ->  " + finalValue.toFixed(2) + "°F";
    } else {
      let finalValueplus = (converter.value - 32) / 1.8;
      result.textContent =
        converter.value + "°F  ->  " + finalValueplus.toFixed(2) + "°C";
    }
  }
}
function reset() {
  result.textContent = "";
  converter.setAttribute("value", "");
}
function change() {
  if (CantDeg.textContent === "°C") {
    CantDeg.textContent = "°F";
    FarenDeg.textContent = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "°F to °C";
  } else {
    CantDeg.textContent = "°C";
    FarenDeg.textContent = "°F";
    document.title = "°C to °F";
    converter.setAttribute("placeholder", "°C");
  }
}
console.log(converter);
convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);
