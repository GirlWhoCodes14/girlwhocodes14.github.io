import { videos } from "../data/videos.js";
import { awards } from "../data/awards.js";
import { createSlider, scrollLeft, scrollRight, checkScreenWidth } from "../scripts/utils/sliders.js";

/* ------------------ generate videos --------------------- */
// create video slider section
document.querySelector('#js-video-section').innerHTML = createSlider("Project Videos");

// generate the videos for the projects video slider
let videosHTML = '';

videos.forEach(video => {
  videosHTML += `
  <div class="media-container">
    <iframe class="video" width="auto" height="auto" src="${video.src}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;
})

document.querySelector('#video-scroller').innerHTML = videosHTML;

/* functions used to scroll through the sliders */


/* --------------- scroll through videos ----------------- */
const leftScrollVideo = document.querySelector('.js-left-scroll-video')
const rightScrollVideo = document.querySelector('.js-right-scroll-video')
let videoScroll = document.querySelector("#video-scroller");

leftScrollVideo.addEventListener("click", () => scrollLeft(videoScroll))
rightScrollVideo.addEventListener("click", () => scrollRight(videoScroll))



/* ------------------ generate accomplishments --------------------- */
// create accomplishments slider section
document.querySelector('#js-award-section').innerHTML = createSlider("My Accomplishments");

let awardsHTML = '';

// generate the awards for the accomplishments slider
awards.forEach(award => {
  awardsHTML += `
  <div class="media-container">
    <img class="${award.orientation}" src="images/accomplishments/${award.src}" alt="${award.alt}" loading="lazy">
  </div>
  `;
})

document.querySelector('#award-scroller').innerHTML = awardsHTML;

/* --------------- scroll through accomplishments ----------------- */
const leftScrollAwards = document.querySelector('.js-left-scroll-award')
const rightScrollAwards = document.querySelector('.js-right-scroll-award')
let awardScroll = document.querySelector("#award-scroller");

leftScrollAwards.addEventListener("click", () => scrollLeft(awardScroll))
rightScrollAwards.addEventListener("click", () => scrollRight(awardScroll))




// ----------------- responsiveness -------------------
const sliderMediaClass = ".video, .portrait, .landscape";

// check the screen width whenever the screen is resized
window.addEventListener("resize", () => checkScreenWidth(sliderMediaClass));

// call the function to handle initial screen size
checkScreenWidth(sliderMediaClass);