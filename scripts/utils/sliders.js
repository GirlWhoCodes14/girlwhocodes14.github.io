/* ------------------- scroll through slider ------------------- */
// Regex to match one or more digits
const regex = /\d+/g;

let width;
let padding;

function getWidthAndPadding(slide) {
  width = document.querySelector(".video").offsetWidth;
  padding = Number(window.getComputedStyle(slide).getPropertyValue('padding-left').match(regex));
}

export function scrollLeft(slide) {
  getWidthAndPadding(slide);
  slide.scrollBy((width + padding) * -1, 0);
}

export function scrollRight(slide) {
  getWidthAndPadding(slide);
  slide.scrollBy(width + padding, 0);
}

// ------------------- responsiveness -------------------
function setWidthForSlides(classes, width) {
  document.querySelectorAll(classes).forEach(media => {
    media.style.width = width;
  });
}

export function checkScreenWidth(classes) {
  if (window.innerWidth <= 550) {
    setWidthForSlides(classes, document.querySelector('.cover').offsetWidth + "px");
  } else {
    setWidthForSlides(classes, "");
  }
}



/* --------------- generate sliders --------------- */
const sliders = [
  {
    title: "Project Videos",
    class: "video",
  },
  {
    title: "My Accomplishments",
    class: "award"
  }
]

export function createSlider(sliderTitle) {
  let sliderSectionHTML = "";

  sliders.forEach(slider => {
    if (slider.title === sliderTitle) {
      sliderSectionHTML = `
      <div class="header-with-lines">
        <hr><h3 class="section-header">${slider.title}</h3><hr>
      </div>

      <div class="main-scroll">
        <!-- Scroll Left Button -->
        <div class="icon js-left-scroll-${slider.class}"><i class="fa-solid fa-chevron-left"></i></div>
        <!-- Overlay of Media Scroll -->
        <div class="cover">
          <!-- Media Scroll -->
          <div id="${slider.class}-scroller" class="scroll-media">
          </div>
        </div>

        <!-- Scroll Right Button -->
        <div class="icon js-right-scroll-${slider.class}"><i class="fa-solid fa-chevron-right"></i></div>
      </div>
    `;
    }
  })

  return sliderSectionHTML
};