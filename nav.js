// Toggle Navbar for Mobile View
const barIcon = document.querySelector('.bar_icon');
const navLinks = document.querySelector('.nav_links');

barIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
