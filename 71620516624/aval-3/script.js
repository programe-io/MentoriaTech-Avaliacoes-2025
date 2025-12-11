/* MENU MOBILE */
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

/* ANIMAÇÃO DE APARIÇÃO */
const animated = document.querySelectorAll(".animate-fade, .animate-up");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));

/* FORM */
document.querySelector(".form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! 🚴‍♂️");
});
