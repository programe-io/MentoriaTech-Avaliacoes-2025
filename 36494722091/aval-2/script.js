// ====== SCRIPT DO BLOG DE GAMES ======

// ====== Mensagem de boas-vindas no console ======
console.log("%c🎮 Bem-vindo ao GameZone Blog!", "color: #00b4d8; font-size: 16px; font-weight: bold;");

// ====== MODO CLARO / ESCURO ======

// Cria o botão dinamicamente
const btnToggle = document.createElement("button");
btnToggle.textContent = "🌗 Modo Escuro";
btnToggle.style.position = "fixed";
btnToggle.style.bottom = "20px";
btnToggle.style.right = "20px";
btnToggle.style.backgroundColor = "#00b4d8";
btnToggle.style.color = "#000";
btnToggle.style.border = "none";
btnToggle.style.padding = "10px 15px";
btnToggle.style.borderRadius = "8px";
btnToggle.style.cursor = "pointer";
btnToggle.style.fontWeight = "bold";
btnToggle.style.zIndex = "1000";
btnToggle.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

document.body.appendChild(btnToggle);

// Verifica se o usuário já tem uma preferência salva
let modoEscuro = localStorage.getItem("modoEscuro") === "true";

// Função para aplicar o modo
function aplicarModoEscuro(ativo) {
  if (ativo) {
    document.body.style.backgroundColor = "#f0f0f0";
    document.body.style.color = "#111";
    document.querySelector("header").style.backgroundColor = "#00b4d8";
    document.querySelector("header h1").style.color = "#111";
    document.querySelector("footer").style.backgroundColor = "#00b4d8";
    document.querySelector("footer").style.color = "#111";
    btnToggle.textContent = "🌞 Modo Claro";
  } else {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#e0e0e0";
    document.querySelector("header").style.backgroundColor = "#1f1f1f";
    document.querySelector("header h1").style.color = "#00b4d8";
    document.querySelector("footer").style.backgroundColor = "#1f1f1f";
    document.querySelector("footer").style.color = "#999";
    btnToggle.textContent = "🌗 Modo Escuro";
  }
  localStorage.setItem("modoEscuro", ativo);
}

// Aplica o modo salvo ao carregar
aplicarModoEscuro(modoEscuro);

// Alterna o modo ao clicar
btnToggle.addEventListener("click", () => {
  modoEscuro = !modoEscuro;
  aplicarModoEscuro(modoEscuro);
});

// ====== Animação simples no título ======
const titulo = document.querySelector("header h1");
if (titulo) {
  titulo.style.transition = "transform 0.3s ease";
  titulo.addEventListener("mouseover", () => titulo.style.transform = "scale(1.1)");
  titulo.addEventListener("mouseout", () => titulo.style.transform = "scale(1)");
}
