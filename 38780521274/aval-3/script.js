/* =====================================
   BLOG DO WHEELING - SCRIPT PRINCIPAL
   Autor: João "Wheeler"
   Tema: Vida sobre uma roda 🏍️🔥
   ===================================== */

/* ====== BOAS-VINDAS ====== */
window.addEventListener("DOMContentLoaded", () => {
  const saudacao = document.createElement("div");
  saudacao.textContent = "Bem-vindo(a) ao Blog do Wheeling! 🏁";
  saudacao.style.position = "fixed";
  saudacao.style.top = "20px";
  saudacao.style.left = "50%";
  saudacao.style.transform = "translateX(-50%)";
  saudacao.style.background = "linear-gradient(135deg, #ff4500, #ff6a00)";
  saudacao.style.color = "#fff";
  saudacao.style.padding = "10px 20px";
  saudacao.style.borderRadius = "25px";
  saudacao.style.fontWeight = "bold";
  saudacao.style.boxShadow = "0 0 10px rgba(255,106,0,0.7)";
  saudacao.style.zIndex = "1000";
  saudacao.style.opacity = "0";
  saudacao.style.transition = "opacity 0.8s ease";

  document.body.appendChild(saudacao);

  // Efeito de fade-in / fade-out
  setTimeout(() => (saudacao.style.opacity = "1"), 300);
  setTimeout(() => (saudacao.style.opacity = "0"), 3500);
  setTimeout(() => saudacao.remove(), 4500);
});

/* ====== BOTÃO DE MODO ESCURO / CLARO ====== */
const btnModo = document.createElement("button");
btnModo.textContent = "🌙 Modo Escuro";
btnModo.style.position = "fixed";
btnModo.style.bottom = "20px";
btnModo.style.right = "20px";
btnModo.style.background = "linear-gradient(135deg, #ff6a00, #ff4500)";
btnModo.style.color = "#fff";
btnModo.style.border = "none";
btnModo.style.padding = "12px 18px";
btnModo.style.borderRadius = "25px";
btnModo.style.fontWeight = "bold";
btnModo.style.cursor = "pointer";
btnModo.style.boxShadow = "0 0 10px rgba(255,106,0,0.4)";
btnModo.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

btnModo.addEventListener("mouseenter", () => {
  btnModo.style.transform = "scale(1.1)";
  btnModo.style.boxShadow = "0 0 20px rgba(255,106,0,0.8)";
});
btnModo.addEventListener("mouseleave", () => {
  btnModo.style.transform = "scale(1)";
  btnModo.style.boxShadow = "0 0 10px rgba(255,106,0,0.4)";
});

document.body.appendChild(btnModo);

/* ====== FUNÇÃO DO MODO ESCURO/CLARO ====== */
let modoEscuro = true;

btnModo.addEventListener("click", () => {
  const body = document.body;
  const container = document.querySelector(".container");
  const footer = document.querySelector("footer");

  modoEscuro = !modoEscuro;

  if (modoEscuro) {
    // Volta ao tema escuro
    body.style.backgroundColor = "#0f0f0f";
    body.style.color = "#f5f5f5";
    container.style.backgroundColor = "#1a1a1a";
    footer.style.backgroundColor = "#111";
    btnModo.textContent = "🌙 Modo Escuro";
  } else {
    // Ativa o tema claro
    body.style.backgroundColor = "#fff5f0";
    body.style.color = "#222";
    container.style.backgroundColor = "#ffffff";
    footer.style.backgroundColor = "#ff6a00";
    footer.style.color = "#fff";
    btnModo.textContent = "☀️ Modo Claro";
  }
});

/* ====== ANIMAÇÃO DE SCROLL (efeito suave) ====== */
const links = document.querySelectorAll('nav a[href^="#"]');
for (const link of links) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute("href"));
    if (destino) {
      window.scrollTo({
        top: destino.offsetTop - 10,
        behavior: "smooth",
      });
    }
  });
}

/* ====== EFEITO DE BRILHO NAS IMAGENS ====== */
const imagens = document.querySelectorAll("article img");
imagens.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 25px rgba(255,106,0,0.7)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "none";
  });
});
