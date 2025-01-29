// // Hero Carousel
// const carouselImages = document.querySelectorAll(".carousel-slide img");
// let currentIndex = 0; // Track the current image index
// let autoDissolve; // Variable to store the automatic dissolve interval

// // Show the first image
// carouselImages[currentIndex].classList.add("active");

// // Function to update the current image
// function showImage(index) {
//   // Remove 'active' from the current image
//   carouselImages[currentIndex].classList.remove("active");

//   // Update to the new index (loop around if necessary)
//   currentIndex = (index + carouselImages.length) % carouselImages.length;

//   // Add 'active' to the new image
//   carouselImages[currentIndex].classList.add("active");
// }

// // Function for next image
// function moveToNextImage() {
//   showImage(currentIndex + 1);
// }

// // Function for previous image
// function moveToPrevImage() {
//   showImage(currentIndex - 1);
// }

// // Automatic dissolve animation
// function startAutoDissolve() {
//   autoDissolve = setInterval(() => {
//     moveToNextImage();
//   }, 3000); // Change image every 3 seconds
// }

// // Stop automatic animation
// function stopAutoDissolve() {
//   clearInterval(autoDissolve);
// }

// // Start the automatic animation
// startAutoDissolve();

// // Manual navigation
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// nextBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToNextImage(); // Move to the next image
//   startAutoDissolve(); // Restart the auto animation
// });

// prevBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToPrevImage(); // Move to the previous image
//   startAutoDissolve(); // Restart the auto animation
// });

// //End of Hero Carousel



// // Hero Carousel
// const carouselImages = document.querySelectorAll(".carousel-slide img");
// let currentIndex = 0; // Track the current image index
// let autoDissolve; // Variable to store the automatic dissolve interval

// // Function to handle image source swapping for responsive design
// function swapImages() {
//   const isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
//   carouselImages.forEach((img) => {
//     const mobileSrc = img.getAttribute("data-src-mobile");
//     const desktopSrc = img.getAttribute("data-src-desktop") || img.getAttribute("src");

//     if (isMobile && mobileSrc) {
//       img.setAttribute("src", mobileSrc);
//     } else {
//       img.setAttribute("src", desktopSrc);
//     }
//   });
// }

// // Show the first image
// carouselImages[currentIndex].classList.add("active");

// // Function to update the current image
// function showImage(index) {
//   // Remove 'active' from the current image
//   carouselImages[currentIndex].classList.remove("active");

//   // Update to the new index (loop around if necessary)
//   currentIndex = (index + carouselImages.length) % carouselImages.length;

//   // Add 'active' to the new image
//   carouselImages[currentIndex].classList.add("active");
// }

// // Function for next image
// function moveToNextImage() {
//   showImage(currentIndex + 1);
// }

// // Function for previous image
// function moveToPrevImage() {
//   showImage(currentIndex - 1);
// }

// // Automatic dissolve animation
// function startAutoDissolve() {
//   autoDissolve = setInterval(() => {
//     moveToNextImage();
//   }, 3000); // Change image every 3 seconds
// }

// // Stop automatic animation
// function stopAutoDissolve() {
//   clearInterval(autoDissolve);
// }

// // Event listener to swap images when the page loads or is resized
// window.addEventListener("resize", swapImages);
// document.addEventListener("DOMContentLoaded", () => {
//   swapImages(); // Ensure the correct images are loaded initially
//   startAutoDissolve(); // Start the automatic animation
// });

// // Manual navigation
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// nextBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToNextImage(); // Move to the next image
//   startAutoDissolve(); // Restart the auto animation
// });

// prevBtn.addEventListener("click", () => {
//   stopAutoDissolve(); // Stop the auto animation temporarily
//   moveToPrevImage(); // Move to the previous image
//   startAutoDissolve(); // Restart the auto animation
// });



const carouselImages = document.querySelectorAll(".carousel-slide img");
let currentIndex = 0;
let autoDissolve;

// Function to handle image source swapping for responsive design
function swapImages() {
  const isMobile = window.innerWidth <= 768;

  carouselImages.forEach((img) => {
    const mobileSrc = img.getAttribute("data-src-mobile");
    const desktopSrc = img.getAttribute("data-src-desktop");

    if (isMobile && mobileSrc) {
      if (img.getAttribute("src") !== mobileSrc) {
        img.setAttribute("src", mobileSrc);
      }
    } else if (desktopSrc) {
      if (img.getAttribute("src") !== desktopSrc) {
        img.setAttribute("src", desktopSrc);
      }
    }
  });
}

// Show the first image
carouselImages[currentIndex].classList.add("active");

// Function to update the current image
function showImage(index) {
  carouselImages[currentIndex].classList.remove("active");
  currentIndex = (index + carouselImages.length) % carouselImages.length;
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
  }, 3000);
}

// Stop automatic animation
function stopAutoDissolve() {
  clearInterval(autoDissolve);
}

// Trigger image swapping on page load and window resize
window.addEventListener("resize", swapImages);
document.addEventListener("DOMContentLoaded", () => {
  swapImages();
  startAutoDissolve();
});

// Manual navigation
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => {
  stopAutoDissolve();
  moveToNextImage();
  startAutoDissolve();
});

prevBtn.addEventListener("click", () => {
  stopAutoDissolve();
  moveToPrevImage();
  startAutoDissolve();
});


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




  // const navLinkEls = document.querySelectorAll('.nav-link');
  // const windowPathname = window.location.pathname;

  // navLinkEls.forEach(navLinkEl => {
  //   if (navLinkEl.href.includes(windowPathname)) {
  //     navLinkEl.classList.add('active');
  //   }
  // })
  const navLinkEls = document.querySelectorAll('.nav-links a'); // Select all <a> inside .nav-links
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const navPath = new URL(navLinkEl.href).pathname; // Get the pathname of the nav link
  if (navPath === windowPathname) {
    navLinkEl.classList.add('active'); // Add the 'active' class to the matching link
  }
});
