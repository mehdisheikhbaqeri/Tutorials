let userNameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let modal = document.querySelector(".modal");
function dataValidation() {
  let usernameValue = userNameInput.value;
  let passwordValue = passwordInput.value;

  if (
    usernameValue.length < 12 ||
    passwordValue < 8 ||
    passwordValue ==
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  ) {
    // alert("error");
    modal.style.display = "inline";
  } else {
    modal.style.background = "green";
    modal.textContent = "Sing in is OK!!!";
    modal.style.display = "inline";
    modal.style.right = "40vw";
  }
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}
