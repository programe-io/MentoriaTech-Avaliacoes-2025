// script.js
// Funções básicas de interação para o site

// Alternar tema claro/escuro
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "🌙 Modo Escuro";
  btn.style.marginLeft = "auto";
  btn.style.padding = "6px 10px";
  btn.style.border = "none";
  btn.style.borderRadius = "6px";
  btn.style.cursor = "pointer";

  const nav = document.querySelector("nav.main-nav");
  if (nav) nav.appendChild(btn);

  let dark = false;
  btn.addEventListener("click", () => {
    dark = !dark;
    if (dark) {
      document.body.style.background = "#1f1f1f";
      document.body.style.color = "#f0f0f0";
      document.querySelectorAll(".card, .post").forEach(el => {
        el.style.background = "#2c2c2c";
        el.style.color = "#f0f0f0";
      });
      btn.textContent = "☀️ Modo Claro";
    } else {
      document.body.style.background = "";
      document.body.style.color = "";
      document.querySelectorAll(".card, .post").forEach(el => {
        el.style.background = "";
        el.style.color = "";
      });
      btn.textContent = "🌙 Modo Escuro";
    }
  });
});

// Exemplo de alerta ao clicar em imagens destacadas
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("feature")) {
    alert("Você clicou na imagem da postagem!");
  }
});
