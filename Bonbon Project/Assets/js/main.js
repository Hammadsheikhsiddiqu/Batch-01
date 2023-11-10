const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
        const intervalTime = 5000; // 5 seconds

        // Function to show the current slide
        function showSlide(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        // Function to show the next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Function to show the previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Autoplay the slider
        setInterval(nextSlide, intervalTime);
