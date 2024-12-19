const images = [
  {
    url: "./img/MaskGroup(1).png",
    group__city: "Rostov-on-Don<br/> LCD admiral",
    group__apartament: "81 m2",
    group__time: "3.5 months",
    group__cost: "Upon request",
    title__link:"ROSTOV-ON-DON, ADMIRAL",
  },
  {
    url: "./img/MaskGroup(2).png",
    group__city: "Sochi<br/> Thieves",
    group__apartament: "105 m2",
    group__time: "4 months",
    group__cost: "Upon request",
    title__link:"SOCHI THIEVES",
  },
  {
    url: "./img/MaskGroup(3).png",
    group__city: "Rostov-on-Don<br/> Patriotic",
    group__apartament: "93 m2",
    group__time: "3 months",
    group__cost: "Upon request",
    title__link:"ROSTOV-ON-DON PATRIOTIC",
  },
];
let CurNumber = 0;
const sliderWrapper = document.querySelector(".slider");
const sliderImages = sliderWrapper.querySelector(".slider-images");
const parentDots = sliderWrapper.querySelector(".slider-dots");
const parentNavigation = sliderWrapper.querySelector(".navigation-links");

function InitImages() {
  images.forEach((image, index) => {
    let imageElement = document.createElement("div");
    imageElement.classList = `image n${index} ${index ? "" : "active"}`;
    imageElement.dataset.index = index;
    imageElement.style.backgroundImage = `url('${image.url}')`;
    sliderImages.appendChild(imageElement);
  });
}
function initSlider(images) {
  if (!images || !images.length) return;
  InitImages();
}

initSlider(images);

function initArrows() {
  let lastIndex = images.length - 1;
  const sliderArrows = sliderWrapper.querySelector(".slider-arrows");
  sliderArrows.querySelectorAll(".slider-arrow ").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      if (arrow.classList.contains("left")) {
        CurNumber = CurNumber === 0 ? lastIndex : CurNumber - 1;
      } else {
        CurNumber = CurNumber === lastIndex ? 0 : CurNumber + 1;
      }
      moveSlider();
    });
  });
}
function moveSlider() {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(`.n${CurNumber}`).classList.add("active");

  let dotsWrapper = document.querySelector(".slider-dots");
  dotsWrapper.querySelector(".active").classList.remove("active");
  dotsWrapper.querySelector(`.n${CurNumber}`).classList.add("active");

  changeText();

  let initMenu = document.querySelector(".navigation-links");
  initMenu.querySelector(".active").classList.remove("active");
  initMenu.querySelector(`.n${CurNumber}`).classList.add("active");
}

initArrows();

function initDots() {
  images.forEach((image, index) => {
    let dot = document.createElement("div");
    dot.className = `slider-dots__item n${index} ${index ? "" : "active"}`;
    dot.dataset.index = index;
    dot.addEventListener("click", function () {
      CurNumber = +this.dataset.index;
      moveSlider();
      parentDots.querySelector(".active").classList.remove(".active");
      this.classList.add(".active");
    });
    parentDots.appendChild(dot);
  });
}

function changeText() {
  document.querySelector(`.group__city`).innerHTML =
    images[CurNumber].group__city;
  document.querySelector(`.group__apartament`).innerHTML =
    images[CurNumber].group__apartament;
  document.querySelector(`.group__time`).innerHTML =
    images[CurNumber].group__time;
  document.querySelector(`.group__cost`).innerHTML =
    images[CurNumber].group__cost;
}

initDots();

function navigMenu() {
  images.forEach((image, index) => {
    let menu = document.createElement("div");
    menu.className = `navigation-links__item n${index} ${
      index ? "" : "active"
    }`;
    menu.dataset.index = index;
    menu.innerText=images[index].title__link;
    menu.addEventListener("click", function () {
      CurNumber = +this.dataset.index;
      moveSlider();
      parentNavigation.querySelector(".active").classList.remove(".active");
      this.classList.add(".active");
    });
    parentNavigation.appendChild(menu);
  });
}
navigMenu();
