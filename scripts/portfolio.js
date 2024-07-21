import { projects } from "../data/portfolio-list.js";

/* generate projects HTML */
let projectsHTML = '';

projects.forEach(project => {
  projectsHTML += `
  <div class="project-preview">
    <a href="projects/${project.link}">
      <img src="images/projects/${project.img.src}" alt="${project.img.alt}">
      <div class="preview-detail">
        <p>${project.name}</p>
        <p><span>${project.type}</span></p>
      </div>
    </a>
  </div>
  `;
})

document.querySelector('.js-projects').innerHTML = projectsHTML;