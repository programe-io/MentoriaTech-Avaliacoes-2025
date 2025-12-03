// BOTÃO HERO - efeito pulsante no span
const btn = document.getElementById("btnSonho");
btn.addEventListener("click", () => {
    btn.classList.add("pulse");

    setTimeout(() => {
        btn.classList.remove("pulse");
    }, 1200);
});

// TÍTULO - glow dinâmico no <span>
const tituloSpan = document.getElementById("tituloSpan");
tituloSpan.addEventListener("mouseover", () => {
    tituloSpan.classList.add("glow");
});
tituloSpan.addEventListener("mouseout", () => {
    tituloSpan.classList.remove("glow");
});

// ITENS DA GALERIA – animações aleatórias
const imagens = document.querySelectorAll(".galeria-item");

function animaImg(img) {
    const efeitos = ["girar", "zoom", "pulse2"];
    const efeito = efeitos[Math.floor(Math.random() * efeitos.length)];
    img.classList.add(efeito);

    setTimeout(() => {
        img.classList.remove(efeito);
    }, 1000);
}

imagens.forEach(img => {
    img.addEventListener("mouseover", () => animaImg(img));
});

// EFEITO em spans coloridos (hover dinâmico)
const spans = document.querySelectorAll(".pink, .blue, .dream, .dream2");

spans.forEach(span => {
    span.addEventListener("mouseover", () => {
        span.style.textShadow = "0 0 15px #ffffff";
        span.style.transform = "scale(1.2)";
    });

    span.addEventListener("mouseout", () => {
        span.style.textShadow = "";
        span.style.transform = "";
    });
});