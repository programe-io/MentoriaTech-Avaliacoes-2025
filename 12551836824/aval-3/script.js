// ===============================
// JavaScript – História da Dança
// Autor: ChatGPT (2025)
// ===============================

// 1️⃣ Atualiza automaticamente o ano no rodapé
const yearSpan = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// 2️⃣ Animação suave no título principal ao carregar
window.addEventListener("load", () => {
    const title = document.querySelector(".title-text");
    title.style.opacity = 0;
    title.style.transition = "opacity 2s ease-in";
    setTimeout(() => {
        title.style.opacity = 1;
    }, 300);
});

// 3️⃣ Música ambiente – tema de dança suave
const musicButton = document.createElement("button");
musicButton.textContent = "🎵 Tocar música ambiente";
musicButton.style.position = "fixed";
musicButton.style.bottom = "20px";
musicButton.style.right = "20px";
musicButton.style.backgroundColor = "#8b5cf6";
musicButton.style.color = "white";
musicButton.style.border = "none";
musicButton.style.padding = "10px 15px";
musicButton.style.borderRadius = "8px";
musicButton.style.cursor = "pointer";
musicButton.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.2)";
musicButton.style.fontSize = "0.95rem";
document.body.appendChild(musicButton);

// Música ambiente (livre de direitos autorais – fonte: Pixabay)
const audio = new Audio("https://cdn.pixabay.com/audio/2023/03/13/audio_73d4de5246.mp3");
audio.loop = true;
audio.volume = 0.5;

let playing = false;

musicButton.addEventListener("click", () => {
    if (!playing) {
        audio.play();
        musicButton.textContent = "⏸️ Pausar música";
        playing = true;
    } else {
        audio.pause();
        musicButton.textContent = "🎵 Tocar música ambiente";
        playing = false;
    }
});

// 4️⃣ Efeito suave nas seções ao rolar a página
const sections = document.querySelectorAll("section, article, aside");
window.addEventListener("scroll", () => {
    sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Define estilo inicial para animação de rolagem
sections.forEach((sec) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.8s ease-out";
});
