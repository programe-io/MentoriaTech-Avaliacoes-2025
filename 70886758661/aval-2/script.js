// ================================
// EF EITO DE DIGITAÇÃO NO HEADER
// ================================
const title = document.querySelector("header h1");
const originalText = "Jujutsu Kaisen";
let index = 0;

function typeWriter() {
    if (index < originalText.length) {
        title.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

// limpa o título para iniciar o efeito
title.textContent = "";
typeWriter();


// ================================
// BOTÃO DE MODO SUKUNA / DARK MODE
// ================================
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Ativar Modo Sukuna";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 20px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#a600ff";
toggleBtn.style.color = "#fff";
toggleBtn.style.fontWeight = "bold";
toggleBtn.style.boxShadow = "0 0 12px #a600ff";
toggleBtn.style.transition = "0.3s";

document.body.appendChild(toggleBtn);

let sukunaMode = false;

toggleBtn.addEventListener("click", () => {
    sukunaMode = !sukunaMode;

    if (sukunaMode) {
        document.body.style.background = "#1b001f";
        document.body.style.color = "#f0d0ff";
        toggleBtn.textContent = "Desativar Modo Sukuna";
        document.body.style.transition = "0.5s";
    } else {
        document.body.style.background = "#0a0a0a";
        document.body.style.color = "#e5e5e5";
        toggleBtn.textContent = "Ativar Modo Sukuna";
    }
});


// ================================
// ZOOM AO CLICAR NA GALERIA
// ================================
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");

        if (!img.style.transition) {
            img.style.transition = "0.3s";
        }

        if (img.classList.contains("zoomed")) {
            img.style.transform = "scale(1.8)";
            img.style.zIndex = "1000";
            img.style.boxShadow = "0 0 15px #ff00ff";
        } else {
            img.style.transform = "scale(1)";
            img.style.zIndex = "1";
            img.style.boxShadow = "none";
        }
    });
});


// ================================
// SURPRESA DO GOJO 😎
// ================================
const gojoMessage = document.createElement("div");
gojoMessage.textContent = "👁️ Você não pode me vencer.";
gojoMessage.style.position = "fixed";
gojoMessage.style.top = "-50px";
gojoMessage.style.right = "20px";
gojoMessage.style.padding = "10px 20px";
gojoMessage.style.background = "rgba(255, 255, 255, 0.1)";
gojoMessage.style.color = "#fff";
gojoMessage.style.backdropFilter = "blur(6px)";
gojoMessage.style.borderRadius = "10px";
gojoMessage.style.fontWeight = "600";
gojoMessage.style.transition = "0.8s ease";
gojoMessage.style.opacity = "0";

document.body.appendChild(gojoMessage);

setTimeout(() => {
    gojoMessage.style.top = "20px";
    gojoMessage.style.opacity = "1";
}, 1500);

setTimeout(() => {
    gojoMessage.style.opacity = "0";
}, 4500);
