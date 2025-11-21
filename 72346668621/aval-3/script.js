function scrollToSection(id) { document.getElementById(id).scrollIntoView({ behavior: "smooth" }); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// WhatsApp automático
function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const msg = document.getElementById("message").value;
    const text = `Olá! Meu nome é ${name}. Mensagem: ${msg}`;
    const url = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}

// Animações
const elements = document.querySelectorAll(".fade, .zoom, .slide-left, .slide-right");
function showOnScroll() {
    const trigger = window.innerHeight * 0.85;
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("show");
    });
}
window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// Menu mobile
function toggleMenu() { document.getElementById("menu").classList.toggle("open"); }

// Dark mode
function toggleDarkMode() { document.body.classList.toggle("dark"); }
