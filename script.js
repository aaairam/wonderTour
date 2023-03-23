const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__mobile__nav");
const qoute = document.querySelector(".qoute");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  qoute.classList.toggle("open");
});

const toggleDot= document.querySelector(".toggle__dot");
const headerdot = document.querySelector(".toggleDot");
toggleDot.addEventListener("click", () => {
  toggleDot.classList.toggle("open");
  headerdot.classList.toggle("open");
});

const drop_down = document.querySelectorAll(".header__mobile__nav .dropdown")
drop_down.forEach((dropd) => {
    dropd.addEventListener("click", () => {
        dropd.nextElementSibling.classList.toggle("open");
        dropd.querySelector("i").classList.toggle("open");
    });
});

const headerBlackHome = document.querySelector(".about");
const about = document.querySelector(".headerBlackHome");
headerBlackHome.addEventListener("click", () => {
  headerBlackHome.classList.toggle("open");
  about.classList.toggle("open");
});
