// ========= ROLAGEM SUAVE NO MENU =========
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            const alvo = document.querySelector(href);

            if (alvo) {
                window.scrollTo({
                    top: alvo.offsetTop - 10,
                    behavior: "smooth"
                });
            }
        }
    });
});


// ========= ANIMAÇÃO AO APARECER (fade-in) =========
const elementosParaAnimar = document.querySelectorAll(
    ".post, .sidebar, .galeria img, .contato"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animar");
        }
    });
}, { threshold: 0.2 });

elementosParaAnimar.forEach(el => observer.observe(el));


// ========= FORMULÁRIO (SIMULAÇÃO DE ENVIO) =========
const form = document.querySelector(".contato form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
}
