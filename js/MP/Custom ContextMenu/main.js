let contextMenu = document.getElementById("contextMenu");

function contextHandler(e) {
  e.preventDefult();

  if (contextMenu.style.display === "none") {
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";

    contextMenu.style.display = "block";
  } else {
    contextMenu.style.left = e.pageX + "px";
    contextMenu.style.top = e.pageY + "px";
  }

  console.log(e);
}
function clickContextMnue() {
  contextMenu.style.display = "none";
}
function keyDownHandler(e) {
  if (e.keyCode === 27) contextMenu.style.display = "none";
}

document.body.addEventListener("contextMenu", contextHandler);
document.body.addEventListener("click", clickContextMnue);
document.body.addEventListener("keydown", keyDownHandler);
