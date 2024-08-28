var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      localStorage.setItem('currentSlideIndex', this.realIndex);
    },
  },
});

// Function to set the slider to the saved slide index
function setCurrentSlide() {
  var savedIndex = localStorage.getItem('currentSlideIndex');
  if (savedIndex !== null) {
    swiper.slideToLoop(parseInt(savedIndex), 0, false);
  }
}

// Set the slider to the saved slide index on page load
setCurrentSlide();
