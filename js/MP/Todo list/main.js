let input = document.querySelector("input");
let addForm = document.querySelector(".add");
let todoUl = document.querySelector(".todos");

function addTodo(newValue) {
  let newTodoLi = document.createElement("li");
  newTodoLi.className =
    "list-group-item d-flex justify-content-between align-items-center";

  let newSpan = document.createElement("span");
  newSpan.textContent = newValue;

  let newTrash = document.createElement("i");
  newTrash.className = "fa fa-trash-o delete";

  newTodoLi.append(newSpan, newTrash);
  todoUl.append(newTodoLi);
}

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

input.addEventListener("keydown", function (e) {
  let newValue = e.target.value.trim();

  if (e.keyCode === 13) {
    if (newValue) {
      input.value = "";
      addTodo(newValue);
    }
  }
});
