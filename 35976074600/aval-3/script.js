// ==========================
// MENU MOBILE
// ==========================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ==========================
// MODO ESCURO
// ==========================
const botaoDark = document.createElement("button");
botaoDark.textContent = "🌙 Modo Escuro";
botaoDark.style.position = "fixed";
botaoDark.style.bottom = "20px";
botaoDark.style.right = "20px";
botaoDark.style.padding = "10px 15px";
botaoDark.style.border = "none";
botaoDark.style.borderRadius = "8px";
botaoDark.style.background = "#333";
botaoDark.style.color = "white";
botaoDark.style.cursor = "pointer";
botaoDark.style.zIndex = "1000";

document.body.appendChild(botaoDark);

botaoDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  botaoDark.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});
