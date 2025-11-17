// ============================
// MENU MOBILE
// ============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ============================
// SCROLL INDICATOR FADE
// ============================
const scrollIcon = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollIcon.style.opacity = "0";
  } else {
    scrollIcon.style.opacity = "1";
  }
});

// ============================
// REVEAL ANIMATION (surreal)
// ============================
const revealElements = document.querySelectorAll("article, .dreamhouse-text, .dreamhouse-gallery img, .about-author");

function revealOnScroll() {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.transition = "1s";
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
}

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // inicializa
