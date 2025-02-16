// Mobile Navigation Toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth',
      });
      // Close mobile menu after clicking a link (if open)
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    }
  });
});