const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];
let index = 0;
const sliderImage = document.getElementById("sliderImage");
function showImage() {
  sliderImage.src = images[index];
}
function nextSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
}
setInterval(() => {
  nextSlide();
}, 3000);
