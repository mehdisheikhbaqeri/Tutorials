const input = document.querySelector("input");
const span = document.querySelector("span");
const inputMaxLength = input.getAttribute("maxLength");

input.addEventListener("keyup", function () {
  //   console.log("keyup");

  span.textContent = inputMaxLength - input.value.length;
});
