// JavaScript do menu mobile
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("navbar");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
