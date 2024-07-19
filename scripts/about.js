const skillsList = [
{
  type: "Programming",
  skills: [
  {
    name: "C/C++",
    img: {
      src: "C++_logo.png",
      alt: "C++ logo"
    }
  },
  {
    name: "Python",
    img: {
      src: "Python_logo.png",
      alt: "Python logo"
    }
  }]
},
{
  type: "APP Development",
  skills: [
  {
    name: "SwiftUI",
    img: {
      src: "swiftui_logo.png",
      alt: "SwiftUI logo"
    }
  },
  {
    name: "Kotlin",
    img: {
      src: "Kotlin_logo.jpg",
      alt: "Kotlin logo"
    }
  }]
},

{
  type: "Web Development",
  skills: [
  {
    name: "HTML",
    img: {
      src: "HTML_logo.png",
      alt: "HTML logo"
    }
  },
  {
    name: "CSS",
    img: {
      src: "CSS3_logo.png",
      alt: "CSS3 logo"
    }
  },
  {
    name: "Javascript",
    img: {
      src: "javascript_logo.png",
      alt: "Javascript logo"
    }
  }]
},

{
  type: "NoSQL",
  skills: [
  {
    name: "MongoDB",
    img: {
      src: "MongoDB_logo.png",
      alt: "MongoDB logo"
    }
  }]
},

{
  type: "3D Design",
  skills: [
  {
    name: "SketchUp",
    img: {
      src: "sketchup_logo.png",
      alt: "SketchUp logo"
    }
  },
  {
    name: "Unity",
    img: {
      src: "Unity_logo.png",
      alt: "Unity logo"
    }
  }]
},

{
  type: "Version Control",
  skills: [
  {
    name: "Git",
    img: {
      src: "git_logo.png",
      alt: "Git logo"
    }
  },
  {
    name: "GitHub",
    img: {
      src: "github_logo.jpg",
      alt: "GitHub logo"
    }
  }]
},

{
  type: "Microsoft Office",
  skills: [
  {
    name: "Word",
    img: {
      src: "Microsoft_Office_Word_logo.png",
      alt: "Microsoft Word logo"
    }
  },
  {
    name: "PowerPoint",
    img: {
      src: "Microsoft_Office_PowerPoint_logo.png",
      alt: "Microsoft PowerPoint logo"
    }
  },
  {
    name: "Excel",
    img: {
      src: "Microsoft_Office_Excel_logo.png",
      alt: "Excel"
    }
  }]
},
{
  type: "Familiarity with",
  skills: [
  {
    name: "Java",
    img: {
      src: "Java_logo.png",
      alt: "Java logo"
    }
  },
  {
    name: "Flutter",
    img: {
      src: "Flutter_logo.png",
      alt: "Flutter logo"
    }
  }]
}
]

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
const education = [
{
  link: "https://www.ndhu.edu.tw/",
  img: {
    src: "ndhu_logo.png",
    alt: "NDHU logo"
  },
  time: "2020 - 2024",
  name: "National Dong Hwa University",
  diploma: "Bachelor Degree in Computer Science and Information Engineering"
},
{
  link: "https://www.sjc.edu.bz/juniorcollege",
  img: {
    src: "sjc_logo.jpg",
    alt: "SJC logo"
  },
  time: "2018 - 2020",
  name: "Saint John's College Junior College",
  diploma: "Associate Degree in Computer Science"
},
{
  link: "https://www.sca.edu.bz/",
  img: {
    src: "sca_logo.png",
    alt: "SCS logo"
  },
  time: "2014 - 2018",
  name: "Saint Catherine Academy",
  diploma: "Diploma in Academic Science"
}]

let educationListHTML = '';

education.forEach(school => {
  educationListHTML += `
  <div class="school">
    <div class="school-logo">
      <a href="${school.link}" target="_blank"><img src="images/education/${school.img.src}" alt="${school.img.alt}"></a>
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