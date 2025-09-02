document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        // Show the first slide initially
        slides[currentSlide].classList.add('active');

        const slideInterval = setInterval(nextSlide, 3000); // 3 seconds

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
