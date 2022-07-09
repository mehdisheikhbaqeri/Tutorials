let usernameMessage = document.querySelector(".username");
let passwordMessage = document.querySelector(".password");
let usernameInput = document.querySelector(".username-valid");
let passwordInput = document.querySelector(".password-valid");

function usernameValid() {
  //   alert("username");
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
  if (usernameInput.value.length < 8) {
    usernameMessage.style.color = "red";
    usernameMessage.textContent = "Must Contain 8 Character  (min)";
    usernameMessage.style.display = "block";
  } else {
    usernameMessage.style.color = "green";
    usernameMessage.textContent = "Correct Username Value";
    usernameMessage.style.display = "block";
  }
}
