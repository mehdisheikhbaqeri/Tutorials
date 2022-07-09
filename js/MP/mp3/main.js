let usernameMessage = document.querySelector(".username-valid");
let passwordMessage = document.querySelector(".password-valid");
let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");

function usernameValid() {
  //   alert("username");
  // console.log(usernameInput.value);
  if (usernameInput.value.length < 12) {
    usernameMessage.style.color = "red";
    usernameMessage.textContent = "Must Contain 12 Character  (min)";
    usernameMessage.style.display = "block";
  } else {
    usernameMessage.style.color = "green";
    usernameMessage.textContent = "Correct Username Value";
    usernameMessage.style.display = "block";
  }
}

function passwordValid() {
  //   alert("password");
  if (passwordInput.value.length < 8) {
    passwordMessage.style.color = "red";
    passwordMessage.textContent = "Must Contain 8 Character  (min)";
    passwordMessage.style.display = "block";
  } else {
    passwordMessage.style.color = "green";
    passwordMessage.textContent = "Correct Username Value";
    passwordMessage.style.display = "block";
  }
}
