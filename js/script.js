document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        // Set background images from data-bg attribute
        slides.forEach(slide => {
            const bg = slide.getAttribute('data-bg');
            if (bg) {
                slide.style.backgroundImage = `url('${bg}')`;
            }
        });

        let currentSlide = 0;
        slides[currentSlide].classList.add('active');

        const slideInterval = setInterval(nextSlide, 3000);

        function nextSlide() {
            if (document.hidden) {
                return; // Don't run animation when tab is not visible
            }
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }
});
