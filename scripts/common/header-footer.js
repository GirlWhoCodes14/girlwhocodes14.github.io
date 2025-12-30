import { pages } from "../../data/pages.js";

// -------------- check if you need to exit current folder ---------------
// determine if current page is inside /projects/ and set a relative path back
const currentPath = window.location.pathname;
const isProjectPage = currentPath.includes('/projects/');
const pathBack = isProjectPage ? '../' : '';

/* -------------------------- generate header -------------------------- */
let pagesHTML = '';

pages.forEach(page => {
  pagesHTML += `
  <li><a href="${pathBack}${page.link}" class="nav-link">${page.name}</a></li><hr>
  `;
})

let headerHTML = `
  <a class="my-logo" href="/"><img src="${pathBack}images/alexis_logo.png" alt="Alexis Ayuso's logo">.</a>
  <nav role="navigation" aria-label="Primary navigation">
    <!-- Navigation Bar-->
    <ul id="header-nav">
      ${pagesHTML}
    </ul>

    <!-- hamburger/exit icon -->
    <button class="menu-toggle" aria-expanded="false" aria-controls="dropdown-nav" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
      <span class="sr-only">Toggle navigation</span>
    </button>
  </nav>

  <!-- Dropdown Navigation -->
  <div id="dropdown-nav" role="navigation" aria-hidden="true">
    <ul>
      ${pagesHTML}
    </ul>
  </div>
`
document.querySelector('header').innerHTML = headerHTML

// ----------- set active page in navbar ----------------
const navLinks = document.querySelectorAll('.nav-link');

// normalize current path so '/' matches '/index.html'
const normalizedCurrentPath = (currentPath === '/' ? '/index.html' : currentPath);

navLinks.forEach(function(link) {
  try {
    const linkPath = new URL(link.href).pathname;
    const normalizedLinkPath = (linkPath === '/' ? '/index.html' : linkPath);
    if (normalizedLinkPath === normalizedCurrentPath) {
      link.classList.add('active');
    }
  } catch (e) {
    // ignore non-HTTP links (mailto:, tel:, etc.)
  }
});

// ---------- open/close dropdown navbar ----------------
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleIcon = document.querySelector('.menu-toggle i');
const dropdownMenu = document.querySelector('#dropdown-nav');

if (menuToggle && dropdownMenu && menuToggleIcon) {
  const openMenu = () => {
    dropdownMenu.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    dropdownMenu.setAttribute('aria-hidden', 'false');
    menuToggleIcon.className = 'fa-solid fa-xmark';
  };

  const closeMenu = () => {
    dropdownMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
    menuToggleIcon.className = 'fa-solid fa-bars';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = dropdownMenu.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target) && dropdownMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close when selecting a link inside the dropdown (useful on mobile)
  dropdownMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMenu();
    }
  });
}





/* -------------------------- generate footer -------------------------- */
let footerPagesHTML = '';

pages.forEach(page => {
  footerPagesHTML += `
    <li><a href="${pathBack}${page.link}" class="nav-link footer-nav">${page.name}</a></li>
  `;
})

const currentYear = new Date().getFullYear();
let footerHTML = `
  <p>&copy; ${currentYear} Alexis Ayuso</p>

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
  try {
    const linkPath = new URL(link.href).pathname;
    const normalizedLinkPath = (linkPath === '/' ? '/index.html' : linkPath);
    if (normalizedLinkPath === normalizedCurrentPath) {
      link.classList.add('active');
    }
  } catch (e) {
    // ignore
  }
});