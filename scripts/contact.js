
import { socials } from "../data/social-links.js";

/* --------------------- generate contacts HTML --------------------- */
let contactHTML = '';

socials.forEach(social => {
  contactHTML += `
  <a href="${social.href}" target="_blank">
        <div class="contact-icon"><i class="${social.icon}"></i></div>
        <p>${social.name}</p>
    </a>
  `;
})

document.querySelector('.js-social-icons').innerHTML = contactHTML;



/* -------------------- Popup for form submission ------------------- */
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");

// Helper function to show popup
function showPopup(title, message, titleColor) {
  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popupTitle.style.color = titleColor;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 6000);
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  const data = new FormData(form);

  fetch("https://formspree.io/f/xjkagpbo", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok || data.status === 200) {
      showPopup("Success!", "Email sent successfully!", "#4CAF50"); // green title
      form.reset();
    } else {
      showPopup("Error!", "Oops! Something went wrong.", "#f44336"); // red title
    }
  })
  .catch(err => {
    showPopup("Error!", "Oops! Something went wrong.", "#f44336"); // red title
  });
});