
const menuOpen = document.getElementById("menu-open");
const navlinks = document.querySelectorAll(".nav-menu .nav-item");
const menuClose = document.getElementById("menu-close");
const navMenu = document.querySelector(".nav-menu");

// Open Menu
menuOpen.addEventListener("click", () => {
  navMenu.classList.add("active");
  document.body.classList.add("menu-open"); // Enable blur
});

// Close Menu when nav link is clicked
navlinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open"); // Disable blur
  });
});

// Close Menu
menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open"); // Disable blur
});

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,
  grabCursor: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
  }

})