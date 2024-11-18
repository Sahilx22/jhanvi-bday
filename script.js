// Fireworks display and transition to birthday text
window.onload = function() {
    setTimeout(() => {
        document.getElementById("error-text").classList.add("hidden");
        document.getElementById("birthday-text").classList.remove("hidden");
        document.getElementById("fireworks").classList.remove("hidden");
    }, 3000);

    setTimeout(() => {
        document.getElementById("birthday-text").classList.add("hidden");
        document.getElementById("slider-container").classList.remove("hidden");
        playSong(0);
        showSlide(0);
    }, 13000);
};

// Function to show a specific slide in the slider
let currentSlideIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const songs = document.querySelectorAll("audio");
    slides.forEach(slide => slide.style.display = 'none');
    songs.forEach(song => song.pause());
    slides[index].style.display = 'block';
    songs[index].play();
    currentSlideIndex = index;
}

// Function to play song dynamically when the slide changes
function playSong(index) {
    const song = document.querySelectorAll("audio")[index];
    song.play();
}

// Button click to move to the next slide
document.getElementById("next-button").addEventListener("click", () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
});

// Arrow navigation
document.getElementById("left-arrow").addEventListener("click", () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
});

document.getElementById("right-arrow").addEventListener("click", () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
});
