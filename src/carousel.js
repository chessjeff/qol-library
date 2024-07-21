const carouselSlides = document.getElementById("carousel-slides");
const nextFrame = function () {
  carouselSlides.scrollLeft += 300;
};

const previousFrame = function () {
  carouselSlides.scrollLeft -= 300;
};

const selectFrame = function (button) {
    const scrollPosition = (button * 300) - 300;
    carouselSlides.scroll(scrollPosition, 0)
}

export { nextFrame, previousFrame, selectFrame };
