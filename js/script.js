let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);