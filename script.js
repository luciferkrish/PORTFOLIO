// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for Quotes
function openModal(quoteId) {
    var modal = document.getElementById("quoteModal");
    var modalText = document.getElementById("modal-text");

    // Set the text for the modal based on the quote clicked
    if (quoteId === "quote1") {
        modalText.innerText = "The service of the nation is the greatest service.";
    } else if (quoteId === "quote2") {
        modalText.innerText = "No nation can be great without respect for its heritage.";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("quoteModal");
    modal.style.display = "none";
}

// Slider functionality (Auto change images every 3 seconds)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');
const totalSlides = slides.length;

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; // Hide all slides
    });

    currentSlide = (currentSlide + 1) % totalSlides; // Cycle through slides
    slides[currentSlide].style.display = 'block'; // Show the current slide
}

// Start the slider
setInterval(showSlide, 3000);
showSlide(); // Show the first slide immediately
