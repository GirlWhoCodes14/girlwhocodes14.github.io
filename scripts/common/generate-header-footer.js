const pages = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: 'about.html',
    name: 'About'
  },
  {
    link: 'portfolio.html',
    name: 'Portfolio'
  },
  {
    link: 'contact.html',
    name: 'Contact'
  }
]

// check if you need to exit current folder
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

