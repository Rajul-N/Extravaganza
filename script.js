


// document.querySelector('.hamburger-menu').addEventListener('click', function () {
//   const navLinks = document.querySelector('.nav-links');
//   navLinks.classList.toggle('active'); // Toggle the 'active' class
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function () {
//   const navLinks = document.querySelector('.nav-links');
//   const hamburgerMenu = document.querySelector('.hamburger-menu');

//   navLinks.classList.toggle('active'); // Show or hide the menu
//   hamburgerMenu.classList.toggle('active'); // Transform hamburger to cross
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function () {
//   const navLinks = document.querySelector('.nav-links');
//   const hamburgerMenu = document.querySelector('.hamburger-menu');

//   navLinks.classList.toggle('active'); // Show or hide the menu
//   hamburgerMenu.classList.toggle('active'); // Transform hamburger to cross
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function () {
//   const nav = document.querySelector('nav'); // Target the parent nav
//   nav.classList.toggle('active'); // Toggle the active class on the nav
// });

// Hamburger Menu

document.querySelector('.hamburger-menu').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('nav');

  navLinks.classList.toggle('active'); // Toggle menu visibility
  hamburgerMenu.classList.toggle('active'); // Toggle cross icon
  nav.classList.toggle('active'); // Toggle nav-specific styling
});
