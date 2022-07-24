let locationKey = document.querySelector("#location");
let title = document.querySelector("title");
let keyCode = document.getElementById("keyCode");
let key = document.getElementById("key");
let which = document.getElementById("which");
let code = document.getElementById("code");

document.body.addEventListener("keydown", function (e) {
  e.preventDefault();

  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  let eventKeyCode = e.keyCode;
  let eventkey = e.key;
  let eventLocation = e.location;
  let eventWhich = e.which;
  let eventCode = e.code;

  keyCode.textContent = eventKeyCode;
  key.textContent = eventkey;
  locationKey.textContent = eventLocation;
  which.textContent = eventWhich;
  code.textContent = eventCode;
  console.log(e);
});
