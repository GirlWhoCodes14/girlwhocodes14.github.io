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