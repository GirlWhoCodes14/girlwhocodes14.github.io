import { videos } from "../data/videos.js";
import { awards } from "../data/awards.js";

/* ------------------ generate videos --------------------- */
let videosHTML = '';

videos.forEach(video => {
  videosHTML += `
  <div class="media-container">
    <iframe width="auto" height="auto" src="${video.src}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;
})

document.querySelector('#video-scroller').innerHTML = videosHTML;

/* --------------- scroll through videos ----------------- */
const leftScrollVideo = document.querySelector('.js-left-scroll-video')
const rightScrollVideo = document.querySelector('.js-right-scroll-video')
let videoScroll = document.querySelector("#video-scroller");

// Regex to match one or more digits
const regex = /\d+/g;

leftScrollVideo.addEventListener("click", () => {
  const width = document.querySelector(".media-container iframe").offsetWidth;
  const padding = Number(window.getComputedStyle(videoScroll).getPropertyValue('padding-left').match(regex));
  videoScroll.scrollBy((width + padding) * -1, 0);
})

rightScrollVideo.addEventListener("click", () => {
  const width = document.querySelector(".media-container iframe").offsetWidth;
  const padding = Number(window.getComputedStyle(videoScroll).getPropertyValue('padding-left').match(regex));
  videoScroll.scrollBy(width + padding, 0);
})



/* ------------------ generate accomplishments --------------------- */
let awardsHTML = '';

awards.forEach(award => {
  awardsHTML += `
  <div class="media-container">
    <img class="${award.orientation}" src="images/accomplishments/${award.src}" alt="${award.alt}">
  </div>
  `;
})

document.querySelector('#accomplishments-scroller').innerHTML = awardsHTML;



/* --------------- scroll through accomplishments ----------------- */
const leftScrollAwards = document.querySelector('.js-left-scroll-awards')
const rightScrollAwards = document.querySelector('.js-right-scroll-awards')
let awardScroll = document.querySelector("#accomplishments-scroller");

leftScrollAwards.addEventListener("click", () => {
  const width = document.querySelector(".media-container .portrait").offsetWidth;
  const padding = Number(window.getComputedStyle(awardScroll).getPropertyValue('padding-left').match(regex));
  awardScroll.scrollBy((width + padding) * -1, 0);
})

rightScrollAwards.addEventListener("click", () => {
  const width = document.querySelector(".media-container .portrait").offsetWidth;
  const padding = Number(window.getComputedStyle(awardScroll).getPropertyValue('padding-left').match(regex));
  awardScroll.scrollBy(width + padding, 0);
})




// ----------------- responsiveness -------------------
/*
window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    const coverWidth = document.querySelector('.cover').offsetWidth;
    document.querySelectorAll(".media-container iframe").forEach(video => {
      video.style.width = coverWidth + "px";
    });
    document.querySelectorAll(".media-container .portrait").forEach(award => {
      award.style.width = coverWidth + "px";
    });
    document.querySelectorAll(".media-container .landscape").forEach(award => {
      award.style.height = coverWidth + "px";
    });
  }
});
*/

const mediaQuery = window.matchMedia("(max-width: 550px)"); // Target screens wider than 700px

function handleMediaChange(event) {
  if (event.matches) {
    const coverWidth = document.querySelector('.cover').offsetWidth + "px";
    document.querySelectorAll(".media-container iframe").forEach(video => {
      video.style.width = coverWidth;
    });
    document.querySelectorAll(".media-container .portrait").forEach(award => {
      award.style.width = coverWidth;
    });
    document.querySelectorAll(".media-container .landscape").forEach(award => {
      award.style.width = coverWidth;
    });
  }
  else {
    // reset styles if screen size goes above 700px
    document.querySelectorAll(".media-container iframe").forEach(video => {
      video.style.width = ""; // Remove inline width style
    });
    document.querySelectorAll(".media-container .portrait").forEach(award => {
      award.style.width = "";
    });
    document.querySelectorAll(".media-container .landscape").forEach(award => {
      award.style.width = "";
    });
  }
}

mediaQuery.addEventListener("change", handleMediaChange);

// Call the function initially to handle initial screen size
handleMediaChange(mediaQuery);