let sliderImage = document.querySelector("img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let imgSrcArray = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let imgIndex = 0;
function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImage.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }

  sliderImage.setAttribute("src", imgSrcArray[imgIndex]);
  console.log(imgIndex, imgSrcArray[imgIndex]);
}

setInterval(nextImage, 3000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
