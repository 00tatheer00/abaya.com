// script.js

const slider = document.querySelector('.slider');

// Adjust the interval (in milliseconds) to change the speed of the slider
const slideInterval = 4000;

let currentSlide = 0;
let slideCount = slider.querySelectorAll('img').length;

function slideImages() {
    currentSlide++;

    if (currentSlide === slideCount) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(slideImages, slideInterval);
