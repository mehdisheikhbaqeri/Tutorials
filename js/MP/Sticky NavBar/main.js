let NavBar = document.getElementById("mainNav");
let logo = document.querySelector("img");

document.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 0) {
    logo.style.height = "60px";
    NavBar.classList.add("bg-black");
    NavBar.classList.add("txt-white");
  } else {
    logo.style.height = "84px";
    NavBar.classList.remove("bg-black");
    NavBar.classList.remove("txt-white");
  }
});
