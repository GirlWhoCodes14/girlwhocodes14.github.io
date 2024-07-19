// set active page in navbar
const navLinks = document.querySelectorAll('.nav-link');
const footerNav = document.querySelectorAll('.nav-link.footer-nav'); // footer.html

navLinks.forEach(function(link) {
  if (link.href.endsWith(currentPath)) {
    link.classList.add('active');
  }
});

// set active page in footer
footerNav.forEach(function(link) {
  if (link.href.endsWith(currentPath)) {
    link.classList.add('active');
  }
});



// ------------- open/close dropdown navbar ----------------------
const menuToggle = document.querySelector('.menu-toggle')
const menuToggleIcon = document.querySelector('.menu-toggle i')
const dropdownMenu = document.querySelector('#dropdown-nav')

menuToggle.onclick = function() {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')
  menuToggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
