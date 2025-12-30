import { skillsList } from "../data/skills.js";
import { education } from "../data/education.js";


/* --------- generate skills list --------- */
let skillsListHTML = '';

skillsList.forEach(skillSet => {
  let skillsSetHTML = '';

  skillSet.skills.forEach(skill => {
    skillsSetHTML += `
      <div class="skill">
        <img src="images/skills/${skill.img.src}" alt="${skill.img.alt}">
        <p>${skill.name}</p>
      </div>
    `;
  })

  skillsListHTML += `
  <div class="skill-group">
    <h5>${skillSet.type}</h5>
    <div class="skills">
      ${skillsSetHTML}
    </div>
  </div>
  `
})

document.querySelector('#skills-list').innerHTML = skillsListHTML;


/* --------- generate education list --------- */
let educationListHTML = '';

education.forEach(school => {
  educationListHTML += `
  <div class="school">
    <div class="school-logo">
      <a href="${school.link}" target="_blank" rel="noopener noreferrer"><img src="images/education/${school.img.src}" alt="${school.img.alt}"></a>
    </div>
    <div class="school-details">
      <h4>${school.time}</h4>
      <h3>${school.name}</h3>
      <p>${school.diploma}</p>
    </div>
  </div>
  `;
})

document.querySelector('#schools-list').innerHTML = educationListHTML;