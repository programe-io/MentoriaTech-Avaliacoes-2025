// ========= MENSAGEM MOTIVACIONAL NO HEADER =========

window.addEventListener("load", () => {
    const headerSpam = document.querySelector("header spam");

    if (headerSpam) {
        setTimeout(() => {
            headerSpam.textContent = "Cuide de você todos os dias!";
        }, 2000);
    }
});


// ========= ROLAR SUAVEMENTE PARA AS SEÇÕES =========

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ========= DESTACAR MENU ATIVO =========

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach(l => l.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});


// ========= EFEITO NAS IMAGENS =========

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.opacity = "0.85";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.opacity = "1";
    });
});


// ========= AVISO ALEATÓRIO DE SAÚDE NO ASIDE =========

const dicas = [
    "Beba água ao acordar!",
    "Estique-se por 1 minuto agora.",
    "Respire fundo 5 vezes.",
    "Levante e caminhe um pouco.",
    "Postura correta faz diferença!"
];

function dicaAleatoria() {
    const aside = document.querySelector("aside");
    if (!aside) return;

    const mensagem = document.createElement("p");
    mensagem.textContent = "💡 " + dicas[Math.floor(Math.random() * dicas.length)];
    mensagem.style.background = "#c8f5d3";
    mensagem.style.padding = "8px";
    mensagem.style.borderRadius = "6px";

    aside.appendChild(mensagem);

    setTimeout(() => mensagem.remove(), 6000);
}

setInterval(dicaAleatoria, 8000);


// ========= ANIMAÇÃO AO APARECER SEÇÕES =========

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section, article").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s";
    observer.observe(el);
});
