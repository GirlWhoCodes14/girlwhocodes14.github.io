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
  <li><a href="${pathBack}${page.link}" class="nav-link">${page.name}</a></li>
  `;
})

let headerHTML = `
  <a class="my-logo" href="${pathBack}index.html"><img src="${pathBack}images/alexis_logo.png" alt="Alexis Ayuso's logo"></a>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <nav role="navigation" aria-label="Primary navigation" class="primary-nav">
    <!-- Desktop Navigation -->
    <ul id="header-nav" class="nav-list" aria-hidden="true" hidden>
      ${pagesHTML}
    </ul>

    <!-- Hamburger / toggle -->
    <button class="menu-toggle" aria-expanded="false" aria-controls="header-nav" aria-label="Toggle navigation">
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
      <span class="sr-only">Toggle navigation</span>
    </button>
  </nav>
`;
document.querySelector('header').innerHTML = headerHTML;  

// Ensure pages have a main content id for the skip link to target
const mainEl = document.querySelector('main');
if (mainEl && !mainEl.id) {
  mainEl.id = 'main-content';
}

// Set initial hidden + aria-hidden for the nav list depending on viewport
const navListEl = document.querySelector('#header-nav');
if (navListEl) {
  if (window.innerWidth > 850) {
    navListEl.hidden = false;
    navListEl.setAttribute('aria-hidden', 'false');
  } else {
    navListEl.hidden = true;
    navListEl.setAttribute('aria-hidden', 'true');
  }
} 

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
      link.setAttribute('aria-current', 'page');
    }
  } catch (e) {
    // ignore non-HTTP links (mailto:, tel:, etc.)
  }
});

// ---------- open/close responsive navbar ----------------
const headerEl = document.querySelector('header');
const navList = document.querySelector('#header-nav');
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleIcon = document.querySelector('.menu-toggle i');

if (menuToggle && navList && menuToggleIcon && headerEl) {
  const firstLinkSelector = 'a';

  const openMenu = () => {
    // Reveal the DOM node first to ensure it is not shown partially due to CSS transitions
    navList.hidden = false;
    navList.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggleIcon.className = 'fa-solid fa-xmark';

    // Force reflow so the browser has registered the visibility change before adding the class
    void navList.offsetWidth;

    headerEl.classList.add('menu-open');

    // Move focus to first link for keyboard users
    const firstLink = navList.querySelector(firstLinkSelector);
    if (firstLink) firstLink.focus();

    // Prevent background scroll on mobile
    document.documentElement.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    // Remove the class first to start the hide transition
    headerEl.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');

    // Only hide the nav element on small screens after transitions; set it immediately to avoid flash
    if (window.innerWidth <= 850) {
      navList.hidden = true;
      navList.setAttribute('aria-hidden', 'true');
    }

    menuToggleIcon.className = 'fa-solid fa-bars';
    // Return focus to toggle for accessibility
    menuToggle.focus();
    document.documentElement.style.overflow = '';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = headerEl.classList.contains('menu-open');
    if (isOpen) closeMenu(); else openMenu();
  });

  // Support keyboard navigation: open+focus first link on ArrowDown, close on Escape
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      openMenu();
      e.preventDefault();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && headerEl.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !menuToggle.contains(e.target) && headerEl.classList.contains('menu-open')) {
      closeMenu();
    }
  });

  // Close when selecting a link inside the nav (useful on mobile)
  navList.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMenu();
    }
  });

  // If focus leaves the menu and toggle, close it
  navList.addEventListener('focusout', (e) => {
    const newTarget = e.relatedTarget;
    if (headerEl.classList.contains('menu-open') && newTarget && !navList.contains(newTarget) && !menuToggle.contains(newTarget)) {
      closeMenu();
    }
  });

  // Ensure menu closes when resizing to desktop and keep aria-hidden in sync
  window.addEventListener('resize', () => {
    if (window.innerWidth > 850 && headerEl.classList.contains('menu-open')) {
      closeMenu();
    }

    // keep aria-hidden in sync depending on viewport and menu state
    if (window.innerWidth > 850) {
      navList.setAttribute('aria-hidden', 'false');
    } else if (!headerEl.classList.contains('menu-open')) {
      navList.setAttribute('aria-hidden', 'true');
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