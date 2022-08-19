let activeBtn = document.querySelector(".showBtn");
let swiperContainer = document.querySelector(".swiper-container");

activeBtn.addEventListener("click", () => {
  swiperContainer.classList.toggle("swiper-container_active");
  activeBtn.innerHTML =
    activeBtn.innerHTML === "Скрыть"
      ? (activeBtn.innerHTML = "Показать все")
      : (activeBtn.innerHTML = "Скрыть");
  activeBtn.classList.toggle("showBtn-active");
  activeBtn.classList.toggle("showBtn-margin");
});


const myswiper = function () {
  if (window.innerWidth <= 320) {
    const swiper = new Swiper(".swiper-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 16,
      width: 240,
      slidesPerView: 1,
    });
   }
  //   else {
  //    swiper.destroy();
  //  }
};
window.addEventListener("resize", () => {
  myswiper();
});
myswiper();

 
// const swiper = new Swiper(".swiper-slider", {
//   direction: "horizontal",
//   loop: true,
//   spaceBetween: 16,
//   autoheight: true,
//   loop: false,
//   feeMode: false,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// let swiperMode = function () {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     swiper.disable();
//   } else if (init == false && window.matchMedia("(max-width: 768px)").matches) {
//     swiper.enable();
//   }
// };
// window.addEventListener("resize", function () {
//   swiperMode();
// });

// window.onload = function () {
//   let swiper-item = document.querySelectorAll('.swiper-item');
//   let showBtn =

// }

// let mql = window.matchMedia("(max-width: 320px)");

// window.addEventListener("resize", () => {
//   if (mql.matches) {
//     let newSwiper = new Swiper(".swiper__slider", {
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       spaceBetween: 16,
//       width: 240,
//       slidesPerView: 1,
//       init: true,
//     });
//   } else {
//     swiper.destroy();
//   }
// });
// const activeBtn = document.querySelector(".showBtn");
// const swiperContainer = document.querySelector(".swiper-container");

// activeBtn.addEventListener("click", () => {
//   swiperContainer.classList.toggle("swiper-container_active");
//   activeBtn.innerHTML =
//     activeBtn.innerHTML === "Скрыть"
//       ? (activeBtn.innerHTML = "Показать всё")
//       : (activeBtn.innerHTML = "Скрыть");
//   activeBtn.classList.toggle("showBtn-active");
// });
