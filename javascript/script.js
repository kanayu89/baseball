class Carousel {
  constructor(element) {
    this.carousel = element;
    this.inner = element.querySelector(".carousel-inner");
    this.slides = Array.from(element.querySelectorAll(".carousel-item"));
    this.prevBtn = element.querySelector(".prev");
    this.nextBtn = element.querySelector(".next");
    this.currentIndex = 0;
    this.slidesCount = this.slides.length;

    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    // Auto-slide every 5 seconds
    this.interval = setInterval(() => this.next(), 5000);

    // Pause auto-slide on hover
    this.carousel.addEventListener("mouseenter", () =>
      clearInterval(this.interval)
    );
    this.carousel.addEventListener("mouseleave", () => {
      this.interval = setInterval(() => this.next(), 5000);
    });
  }

  updateSlide() {
    this.inner.style.transform = `translateX(-${this.currentIndex * 33.333}%)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slidesCount;
    this.updateSlide();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slidesCount) % this.slidesCount;
    this.updateSlide();
  }
}

// Initialize all carousels when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    new Carousel(carousel);
  });
});
