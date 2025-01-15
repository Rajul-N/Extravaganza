// Brands Carousel
const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Get the number of visible cards in the viewport
const cardWidth = 400; // Width of a single card (adjust to match CSS)
const visibleCards = Math.ceil(track.offsetWidth / cardWidth); // Number of cards visible in the viewport

// Clone enough cards to fill the gaps
const firstClones = cards.slice(0, visibleCards).map(card => card.cloneNode(true));
const lastClones = cards.slice(-visibleCards).map(card => card.cloneNode(true));

// Append clones to the track
firstClones.forEach(card => track.appendChild(card));
lastClones.forEach(card => track.insertBefore(card, cards[0]));

// Update the cards array to include clones
const allCards = Array.from(track.children);

// Update the track width dynamically
track.style.width = `${allCards.length * cardWidth}px`;

// Initial carousel state
let currentIndex = visibleCards; // Start with the first "real" card
track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

// Function to move the carousel
function moveCarousel(index) {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  // Handle seamless looping
  setTimeout(() => {
    if (index === 0) {
      currentIndex = cards.length; // Move to the last "real" card
      track.style.transition = 'none';
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else if (index === allCards.length - visibleCards) {
      currentIndex = visibleCards; // Move to the first "real" card
      track.style.transition = 'none';
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, 500); // Wait for the transition to finish
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = allCards.length - visibleCards;
  }
  moveCarousel(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex += 1;
  if (currentIndex >= allCards.length) {
    currentIndex = visibleCards;
  }
  moveCarousel(currentIndex);
});

// Initialize the carousel
moveCarousel(currentIndex);


// Expertise Carousel

document.querySelectorAll('.carousel').forEach((carousel) => {
  // Select DOM Elements for the specific carousel
  const carouselTrack = carousel.querySelector('.carousel-track');
  const carouselCards = carousel.querySelectorAll('.carousel-card');
  const prevButton = carousel.querySelector('.left-arrow');
  const nextButton = carousel.querySelector('.right-arrow');

  // Track Current Slide
  let currentIndex = 0;

  // Calculate the width of each card
  const cardWidth = carouselCards[0].offsetWidth + 16; // Add gap (16px)

  // Update Carousel Position
  function updateCarousel() {
    // Scroll to the correct position
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Event Listener for Next Button
  nextButton.addEventListener('click', () => {
    if (currentIndex < carouselCards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Event Listener for Prev Button
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Initialize Carousel
  updateCarousel(); // Set initial state
});
