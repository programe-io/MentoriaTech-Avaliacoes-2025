// ===============================
// 📅 MOSTRAR DATA NO CABEÇALHO
// ===============================
const header = document.querySelector("header");
const data = new Date();
const dataFormatada = data.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});
header.innerText += ` - ${dataFormatada}`;

// ===============================
// 🌙 MODO CLARO / ESCURO
// ===============================

// Criar o botão dinamicamente
const botaoModo = document.createElement("button");
botaoModo.id = "modo";
botaoModo.textContent = "🌙 Modo Escuro";
botaoModo.style.position = "fixed";
botaoModo.style.top = "10px";
botaoModo.style.right = "10px";
botaoModo.style.padding = "10px 15px";
botaoModo.style.background = "#2a7ae4";
botaoModo.style.color = "#fff";
botaoModo.style.border = "none";
botaoModo.style.borderRadius = "5px";
botaoModo.style.cursor = "pointer";
botaoModo.style.zIndex = "1000";
document.body.appendChild(botaoModo);

// Função de alternância
botaoModo.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    botaoModo.textContent = "☀️ Modo Claro";
    document.body.style.background = "#0a0a0a";
    document.body.style.color = "white";
  } else {
    botaoModo.textContent = "🌙 Modo Escuro";
    document.body.style.background = "white";
    document.body.style.color = "rgb(17, 56, 128)";
  }
});

// ===============================
// ⭐ FAVORITAR VÍDEOS
// ===============================
const imagens = document.querySelectorAll(".categoria-videos img");

imagens.forEach((img) => {
  img.addEventListener("click", () => {
    const favorito = img.src;
    localStorage.setItem("videoFavorito", favorito);
    alert("🎬 Vídeo adicionado aos favoritos!");
  });
});

// Exibir vídeo favorito (opcional)
const favoritoSalvo = localStorage.getItem("videoFavorito");
if (favoritoSalvo) {
  const favDiv = document.createElement("div");
  favDiv.style.textAlign = "center";
  favDiv.style.marginTop = "40px";
  favDiv.innerHTML = `
    <h3>⭐ Seu vídeo favorito:</h3>
    <img src="${favoritoSalvo}" style="height:200px; border-radius:10px;">
  `;
  document.body.appendChild(favDiv);
}

// ===============================
// 🎥 TOCAR / PAUSAR VÍDEO AUTOMATICAMENTE
// ===============================
const iframe = document.querySelector("iframe");

function controlarVideo(acao) {
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: acao,
      args: []
    }),
    "*"
  );
}

window.addEventListener("scroll", () => {
  const rect = iframe.getBoundingClientRect();
  const visivel = rect.top >= 0 && rect.bottom <= window.innerHeight;

  if (visivel) {
    controlarVideo("playVideo");
  } else {
    controlarVideo("pauseVideo");
  }
});

// ===============================
// ✨ ANIMAR ELEMENTOS NA ROLAGEM
// ===============================

// Função simples de animação quando o elemento entra na tela
function animarScroll() {
  const elementos = document.querySelectorAll("h1, h2, p, img, iframe");
  const triggerBottom = window.innerHeight * 0.85;

  elementos.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.transition = "all 0.8s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);
