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

document.querySelector('.scroll-media').innerHTML = videosHTML;





/* scroll through videos */
const leftScrollVideo = document.querySelector('.js-left-scroll-video')
const rightScrollVideo = document.querySelector('.js-right-scroll-video')

leftScrollVideo.addEventListener("click", () => {
  var left = document.querySelector("#video-scroller");
  left.scrollBy(-300, 0);
})

rightScrollVideo.addEventListener("click", () => {
  var right = document.querySelector("#video-scroller");
  right.scrollBy(300, 0);
})


/* scroll through accomplishments */
const leftScrollAwards = document.querySelector('.js-left-scroll-awards')
const rightScrollAwards = document.querySelector('.js-right-scroll-awards')

leftScrollAwards.addEventListener("click", () => {
  var left = document.querySelector("#accomplishments-scroller");
  left.scrollBy(-350, 0);
})

rightScrollAwards.addEventListener("click", () => {
  var right = document.querySelector("#accomplishments-scroller");
  right.scrollBy(350, 0);
})