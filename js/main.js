const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".preview__button-next",
    prevEl: ".preview__button-prev",
  },
  pagination: {
    el: ".preview__pagination",
  },
  centeredSlides: true,
  slidesPerView: 1.32,
  spaceBetween: 30,
});
const stockSwiper = new Swiper(".stock__swiper", {
  navigation: {
    nextEl: ".stock__next",
    prevEl: ".stock__prev",
  },
  pagination: {
    el: ".stock__pagination",
  },
  slidesPerView: 6,
  spaceBetween: 20,
});
const recipeSwiper = new Swiper(".recipe__swiper", {
  navigation: {
    nextEl: ".recipe__next",
    prevEl: ".recipe__prev",
  },
  pagination: {
    el: ".recipe__pagination",
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
});
const brandSwiper = new Swiper(".brand__swiper", {
  navigation: {
    nextEl: ".brand__next",
    prevEl: ".brand__prev",
  },
  pagination: {
    el: ".brand__pagination",
  },
  slidesPerView: 7.5,
  spaceBetween: 30,
  slidesPerGroup: 4,
});
const alsoSwiper = new Swiper(".also__swiper", {
  navigation: {
    nextEl: ".also__next",
    prevEl: ".also__prev",
  },
  pagination: {
    el: ".also__pagination",
  },
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
});
const prepareSwiper = new Swiper(".prepare__swiper", {
  navigation: {
    nextEl: ".prepare__next",
    prevEl: ".prepare__prev",
  },
  pagination: {
    el: ".prepare__pagination",
  },
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 5,
});
if ($("#slider").length > 0) {
  var slider = document.getElementById("slider");

  noUiSlider.create(slider, {
    start: [1500, 5350],
    tooltips: [true, true],
    format: wNumb({
      decimals: 0, // default is 2
      thousand: " ", // thousand delimiter
      postfix: " руб.", // gets appended after the number
    }),
    connect: true,
    range: {
      min: 100,
      max: 10000,
    },
  });
}
const cardSwiperSmall = new Swiper(".card-product__swiper-small", {
  direction: "vertical",
  slidesPerView: 4,
});
const cardSwiper = new Swiper(".card-swiper", {
  thumbs: {
    swiper: cardSwiperSmall,
  },
});
if ($(".comments").length > 0) {
  $(".comments__tab-1").click(function (e) {
    e.preventDefault();
    $(".comments__tab-content-1").addClass("active");
    $(".comments__tab-content-2").removeClass("active");
    $(".comments__tab-1").addClass("active");
    $(".comments__tab-2").removeClass("active");
    $(".comments__underline").removeClass("move");
  });
  $(".comments__tab-2").click(function (e) {
    e.preventDefault();
    $(".comments__tab-content-2").addClass("active");
    $(".comments__tab-content-1").removeClass("active");
    $(".comments__tab-2").addClass("active");
    $(".comments__tab-1").removeClass("active");
    $(".comments__underline").addClass("move");
  });
}
