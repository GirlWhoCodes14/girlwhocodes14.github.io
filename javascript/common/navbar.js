const navLinks = document.querySelectorAll('.nav-link');

const currentPath = window.location.pathname; // Get the current page path

navLinks.forEach(function(link) {
  if (link.href.endsWith(currentPath)) {
    link.classList.add('active');
  }
});