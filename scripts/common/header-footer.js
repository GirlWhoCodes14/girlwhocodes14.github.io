import { pages } from "../../data/pages.js";

// -------------- check if you need to exit current folder ---------------
const currentPath = window.location.pathname;
let pathBack = '';

if (currentPath.search("projects/")) {
  pathBack = '../';
}

/* -------------------------- generate header -------------------------- */
let pagesHTML = '';

pages.forEach(page => {
  pagesHTML += `
  <li><a href="${pathBack}${page.link}" class="nav-link">${page.name}</a></li><hr>
  `;
})

let headerHTML = `
  <a class="my-logo" href="/"><img src="${pathBack}images/alexis_logo.png" alt="Alexis Ayuso's logo">.</a>
  <nav>
    <!-- Navigation Bar-->
    <ul id="header-nav">
      ${pagesHTML}
    </ul>

    <!-- hamburger/exit icon -->
    <div class="menu-toggle"><i class="fa-solid fa-bars"></i></div>
  </nav>

  <!-- Dropdown Navigation -->
  <div id="dropdown-nav">
    <ul>
      ${pagesHTML}
    </ul>
  </div>
`
document.querySelector('header').innerHTML = headerHTML

// ----------- set active page in navbar ----------------
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
  if (link.href.endsWith(currentPath)) {
    link.classList.add('active');
  }
});

// ---------- open/close dropdown navbar ----------------
const menuToggle = document.querySelector('.menu-toggle')
const menuToggleIcon = document.querySelector('.menu-toggle i')
const dropdownMenu = document.querySelector('#dropdown-nav')

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')
  menuToggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})





/* -------------------------- generate footer -------------------------- */
let footerPagesHTML = '';

pages.forEach(page => {
  footerPagesHTML += `
    <li><a href="${pathBack}${page.link}" class="nav-link footer-nav">${page.name}</a></li>
  `;
})

let footerHTML = `
  <p>&copy; 2024 Alexis Ayuso</p>

  <nav>
    <ul>
      ${footerPagesHTML}
    </ul>
  </nav>
`
document.querySelector('footer').innerHTML = footerHTML

// --------------- set active page in footer ---------------
const footerNav = document.querySelectorAll('.nav-link.footer-nav'); // footer.html

footerNav.forEach(function(link) {
  if (link.href.endsWith(currentPath)) {
    link.classList.add('active');
  }
});




/* ------------------------------ utility ------------------------------------------- */
// ------- prevent viewers from right clicking and download images ------
document.addEventListener('contextmenu', event => {
  if (event.target.matches('img')) {
    event.preventDefault();
  }
});