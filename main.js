const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // When the user scrolls down 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
