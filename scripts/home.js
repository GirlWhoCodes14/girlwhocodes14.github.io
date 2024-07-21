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

/* functions used to scroll through the sliders */
// Regex to match one or more digits
const regex = /\d+/g;

let width;
let padding;

function getWidthAndPadding() {
  width = document.querySelector(".media-container iframe").offsetWidth;
  padding = Number(window.getComputedStyle(videoScroll).getPropertyValue('padding-left').match(regex));
}

function scrollLeft(slide) {
  getWidthAndPadding();
  slide.scrollBy((width + padding) * -1, 0);
}

function scrollRight(slide) {
  getWidthAndPadding();
  slide.scrollBy(width + padding, 0);
}

/* --------------- scroll through videos ----------------- */
const leftScrollVideo = document.querySelector('.js-left-scroll-video')
const rightScrollVideo = document.querySelector('.js-right-scroll-video')
let videoScroll = document.querySelector("#video-scroller");

leftScrollVideo.addEventListener("click", () => scrollLeft(videoScroll))
rightScrollVideo.addEventListener("click", () => scrollRight(videoScroll))



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

leftScrollAwards.addEventListener("click", () => scrollLeft(awardScroll))
rightScrollAwards.addEventListener("click", () => scrollRight(awardScroll))




// ----------------- responsiveness -------------------
function setWidthForSlides(width) {
  document.querySelectorAll(".media-container iframe, .media-container .portrait, .media-container .landscape").forEach(video => {
    video.style.width = width;
  });
}
function checkScreenWidth() {
  if (window.innerWidth <= 550) {
    setWidthForSlides(document.querySelector('.cover').offsetWidth + "px");
  } else {
    setWidthForSlides("");
  }
}

// check the screen width whenever the screen is resized
window.addEventListener("resize", () => checkScreenWidth());

// Call the function to handle initial screen size
checkScreenWidth();


/*
const mediaQuery = window.matchMedia("(max-width: 550px)"); // Target screens wider than 700px

function handleMediaChange(event) {
  if (event.matches) {
    const coverWidth = document.querySelector('.cover').offsetWidth + "px";
    setWidthForSlides(coverWidth);
  }
  else {
    // reset styles if screen size goes above 700px
    setWidthForSlides("");
  }
}
mediaQuery.addEventListener("change", handleMediaChange);

// Call the function initially to handle initial screen size
handleMediaChange(mediaQuery);
*/