//handle button change and show nav on mobile devices

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger");

navBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("burger--is-active");
    nav.classList.toggle("nav--show-on-mobile");
})