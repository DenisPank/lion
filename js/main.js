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
  breakpoints: {
    320: {
      slidesPerView: 1.06,
    },
    1400: {
      slidesPerView: 1.32,
    },
    1720: {
      slidesPerView: 1.32,
    },
  },
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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    475: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1320: {
      slidesPerView: 5,
    },
    1720: {
      slidesPerView: 6,
    },
  },
});
const stockmobilSwiper = new Swiper(".stock__mobil-swiper", {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    475: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
  },
});
const recipeSwiper = new Swiper(".recipe__swiper", {
  navigation: {
    nextEl: ".recipe__next",
    prevEl: ".recipe__prev",
  },
  pagination: {
    el: ".recipe__pagination",
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 1.6,
      slidesPerGroup: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
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
  breakpoints: {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 0,
      slidesPerGroup: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    425: {
      slidesPerView: 4.5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    475: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    577: {
      spaceBetween: 10,
      slidesPerView: 2.5,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerGroup: 3,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1720: {
      slidesPerView: 7.5,
      slidesPerGroup: 4,
    },
  },
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
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },
    475: {
      slidesPerView: 1.8,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1720: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    475: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1.8,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1720: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
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
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 4,
    },
  },
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
const btns = document.querySelectorAll(".counter__btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const direction = this.dataset.direction;
    const inp = this.parentElement.querySelector(".counter__value");
    const currentValue = +inp.value;
    let newValue;
    if (direction === "plus") {
      newValue = currentValue + 0.1;
    } else {
      newValue = currentValue - 0.1 > 0.1 ? currentValue - 0.1 : 0;
    }
    inp.value = newValue;
  });
});
$("#like").click(function () {
  $("#like").toggleClass("like");
});
