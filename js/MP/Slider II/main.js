let slideshow = document.querySelector(".slideShow");
let slides = document.querySelectorAll(".slide");
let points = document.querySelectorAll(".points>span");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let active = 0;
let timer = 5000;

// function

function classSwitcher() {
  slides.forEach((slides) => slides.classList.remove("active"));
  points.forEach((point) => point.classList.remove("active"));
  slides[active].classList.add("active");
  points[active].classList.add("active");
}

let goNext = () => {
  active = active == slides.length - 1 ? 0 : active + 1;
  classSwitcher();
};

let goPrev = () => {
  active = active == 0 ? slides.length - 1 : active - 1;
  classSwitcher();
};

// setInterval
let runSlide = setInterval(goNext, timer);

// point event

points.forEach((point, index) => {
  point.addEventListener("click", (e) => {
    active = index;
    classSwitcher();
  });
});

// next event
next.addEventListener("click", (e) => goNext());

// prev event
prev.addEventListener("click", (e) => goPrev());

// mouse

slideshow.addEventListener("mouseover", (e) => clearInterval(runSlide));
slideshow.addEventListener("mouseleave", (e) => (runSlide = setInterval(goNext, timer)));
