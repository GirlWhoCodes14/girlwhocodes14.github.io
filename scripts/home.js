/* ----------------------------- generate videos ------------------------------------ */
const videos = [
  {
    src: "https://www.youtube.com/embed/5VqnkXPP07s?si=JvpWNEQ7Gd0i3yRP&autoplay=1&mute=1",
    title: "CrosSight Demo"
  },
  {
    src: "https://www.youtube.com/embed/yBwE5zDrRcI?si=253tBxpeJWI4DYYA&autoplay=1&mute=1",
    title: "Report Card Generator"
  },
  {
    src: "https://www.youtube.com/embed/YP1U27tXZxc?si=rDZhf3rEIbRYie8A&autoplay=1&mute=1",
    title: "Supreme Court of Belize (3D Model)"
  },
  {
    src: "https://www.youtube.com/embed/UdHUQAsHCoo?si=1AmJ4NqsTtL6DPrW",
    title: "Sun Moon Lake (3D Terrain)"
  },
  {
    src: "https://www.youtube.com/embed/0CL94L1nRrI?si=7CGTDLuy_2Kb0m2m",
    title: "Meet the Student at National Dong Hwa University | Study in Taiwan"
  },
  {
    src: "https://www.youtube.com/embed/ygq8nLQYDfw?si=6H0C0BW-2MG9EoFm",
    title: "Introduction to Virtual Reality at NDHU"
  },
  {
    src: "https://www.youtube.com/embed/d6YBFvjHhOU?si=65mp89c7QAjSsYSs",
    title: "(Terrain Scene) Sun Moon Lake"
  }
]

let videosHTML = '';

videos.forEach(video => {
  videosHTML += `
  <div class="media-container">
    <iframe width="auto" height="auto" src="${video.src}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  `;
})

document.querySelector('#video-scroller').innerHTML = videosHTML;

/* scroll through videos */
const leftScrollVideo = document.querySelector('.js-left-scroll-video')
const rightScrollVideo = document.querySelector('.js-right-scroll-video')
let videoScroll = document.querySelector("#video-scroller");

// Regex to match one or more digits
const regex = /\d+/g;

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    const coverWidth = document.querySelector('.cover').offsetWidth;
    document.querySelectorAll(".media-container iframe").forEach(video => {
      video.style.width = coverWidth + "px";
      console.log(video.style.width);
    });
    document.querySelectorAll(".media-container .portrait").forEach(award => {
      award.style.width = coverWidth + "px";
      console.log(award.style.width);
    });
    document.querySelectorAll(".media-container .landscape").forEach(award => {
      award.style.height = coverWidth + "px";
      console.log(award.style.height);
    });
  }
});

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

// generate accomplishments
const awards = [
  {
    src: "County Magistrate Award.jpg",
    alt: "Alexis' County Magistrate Award for Ranking 3rd in Graduating Class",
    orientation: "portrait"
  },
  {
    src: "112 CSIE Undergrad Award-zh.jpg",
    alt: "Alexis and Zenroy's First Place Award for 112 CSIE Undergraduate Project (Chinese Version)",
    orientation: "portrait"
  },
  {
    src: "112 CSIE Undergrad Award-en.jpg",
    alt: "Alexis and Zenroy's First Place Award for 112 CSIE Undergraduate Project (English Version)",
    orientation: "portrait"
  },
  {
    src: "ICDF Outstanding Academic Performance Award.jpg",
    alt: "Alexis' ICDF Outstanding Academic Performance",
    orientation: "landscape"
  }
]

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