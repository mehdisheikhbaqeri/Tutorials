const CantDeg = document.querySelector(".C");
const FarenDeg = document.querySelector(".F");
const converter = document.querySelector(".converte");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");
const changeButton = document.querySelector(".changeButton");

function conver() {}
function reset() {
  result.innerHTML = "";
  converter.value = ""; ///Bug
}
function change() {
  if (CantDeg.innerHTML === "°C") {
    CantDeg.innerHTML = "°F";
    FarenDeg.innerHTML = "°C";
    // converter.value = "°C";
    document.title = "°F to °C";
  } else {
    CantDeg.innerHTML = "°C";
    FarenDeg.innerHTML = "°F";
    // converter.setAttribute("placeholder", "°C");
    document.title = "°C to °F";
  }
}

convertButton.addEventListener("click", converter);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", change);
