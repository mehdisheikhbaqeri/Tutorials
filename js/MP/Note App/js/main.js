const input = document.querySelector("#input-field");
const btnSave = document.querySelector("#btn-save");
const btnDel = document.querySelector("#btn-delete");
const colors = document.querySelectorAll(".color-box");
const note = document.querySelector("#listed");

colors.forEach(function (colorBox) {
  //   console.log(colorBox);

  colorBox.addEventListener("click", function (e) {
    // console.log(e.target);

    let maincolor = e.target.style.backgroundColor;
    input.style.backgroundColor = maincolor;
  });
});

function newNote() {
  let newNoteDev = document.createElement("div");
  newNoteDev.className = "card shadow-sm rounded";

  let inputColore = input.style.backgroundColor;
  newNoteDev.style.backgroundColor = inputColore;

  let newNoteP = document.querySelector("p");
  newNoteP.className = "card-text p-3";
  newNoteP.textContent = input.value;

  newNoteDev.append(newNoteP);
  note.append(newNoteDev);

  input.value = "";
  console.log(newNoteP);
}

btnDel.addEventListener("click", function () {
  input.value = "";
  input.style.backgroundColor = "#FFF";
});

input.addEventListener(
  "keydown",
  function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      newNote();
    }
  },
  false
);
