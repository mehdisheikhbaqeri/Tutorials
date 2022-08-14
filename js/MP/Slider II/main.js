let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slide");
let points = document.querySelectorAll(".points>span");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let active = 0;
let timer = 2500;

// function

function classSwitcher(){
    slides.forEach(slides=>slides.classList.remove('active'));
    points.forEach(point=>point.classList.remove('active'));
    slides[active].classList.add("active");
    points[active].classList.add("active");
}

let goNext = () => {
  active = active == slides.length - 1 ? 0 : active + 1;
classSwitcher()
};

// setInterval
setInterval(goNext, timer);
