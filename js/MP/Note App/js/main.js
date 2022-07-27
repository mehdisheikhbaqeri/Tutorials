const input = document.querySelector("#input-field");
const btnSave = document.querySelector("#btn-save");
const btnDel = document.querySelector("#btn-delete");
const colors = document.querySelectorAll(".color-box");
const note = document.querySelector("#listed");

colors.forEach(function (colorBox) {
  //   console.log(colorBox);

  colorBox.addEventListener("click", function (e) {
    console.log(e.target);

    let maincolor = e.target.style.backgroundColor;
    input.style.backgroundColor = maincolor;
  });
});

btnDel.addEventListener("click", function () {
  input.value = "";
  input.style.backgroundColor = "#FFF";
});
