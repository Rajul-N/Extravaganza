// Hero Carousel
const carouselImages = document.querySelectorAll(".carousel-slide img");
let currentIndex = 0; // Track the current image index
let autoDissolve; // Variable to store the automatic dissolve interval

// Show the first image
carouselImages[currentIndex].classList.add("active");

// Function to update the current image
function showImage(index) {
  // Remove 'active' from the current image
  carouselImages[currentIndex].classList.remove("active");

  // Update to the new index (loop around if necessary)
  currentIndex = (index + carouselImages.length) % carouselImages.length;

  // Add 'active' to the new image
  carouselImages[currentIndex].classList.add("active");
}

// Function for next image
function moveToNextImage() {
  showImage(currentIndex + 1);
}

// Function for previous image
function moveToPrevImage() {
  showImage(currentIndex - 1);
}

// Automatic dissolve animation
function startAutoDissolve() {
  autoDissolve = setInterval(() => {
    moveToNextImage();
  }, 3000); // Change image every 3 seconds
}

// Stop automatic animation
function stopAutoDissolve() {
  clearInterval(autoDissolve);
}

// Start the automatic animation
startAutoDissolve();

// Manual navigation
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => {
  stopAutoDissolve(); // Stop the auto animation temporarily
  moveToNextImage(); // Move to the next image
  startAutoDissolve(); // Restart the auto animation
});

prevBtn.addEventListener("click", () => {
  stopAutoDissolve(); // Stop the auto animation temporarily
  moveToPrevImage(); // Move to the previous image
  startAutoDissolve(); // Restart the auto animation
});

//End of Hero Carousel

//Hamburger Menu

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("nav");

    navLinks.classList.toggle("active"); // Toggle menu visibility
    hamburgerMenu.classList.toggle("active"); // Toggle cross icon
    nav.classList.toggle("active"); // Toggle nav-specific styling
  });
