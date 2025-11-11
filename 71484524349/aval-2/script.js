// ===== interacoes.js =====

// Animação de fade-in suave ao carregar os elementos
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("header, nav, aside, main, footer");

    sections.forEach((sec, i) => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(20px)";
        setTimeout(() => {
            sec.style.transition = "all 0.8s ease";
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }, 150 * i);
    });
});

// Animação leve nas imagens da galeria
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        img.style.transform = "scale(1.08)";
        img.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";
    });
});

// Botão de rolagem suave até o topo (adicionado dinamicamente)
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

// Estilo do botão via JS para não precisar mexer no CSS
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.background = "#c95b8a";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.width = "40px";
scrollBtn.style.height = "40px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.opacity = "0";
scrollBtn.style.transition = "all 0.4s ease";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";

// Mostrar/ocultar botão ao rolar a página
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.opacity = "1";
    } else {
        scrollBtn.style.opacity = "0";
    }
});

// Efeito de rolagem suave ao clicar no botão
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Efeito suave no título principal ao passar o mouse
const titulo = document.querySelector("header h1");
titulo.addEventListener("mouseover", () => {
    titulo.style.transition = "color 0.5s ease, letter-spacing 0.5s ease";
    titulo.style.color = "#8b3a62";
    titulo.style.letterSpacing = "2px";
});
titulo.addEventListener("mouseout", () => {
    titulo.style.color = "#c95b8a";
    titulo.style.letterSpacing = "1px";
});
