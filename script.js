let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
