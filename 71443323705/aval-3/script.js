// Mensagem inicial
window.addEventListener("DOMContentLoaded", () => {
  const msg = document.createElement("div");
  msg.textContent = "⚡ Bem-vindo ao mundo de Henry Danger!";
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "rgba(255, 255, 255, 0.9)";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "20px";
  msg.style.fontWeight = "bold";
  msg.style.color = "#ff4757";
  msg.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
  msg.style.zIndex = "1000";
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
});

// Fundo animado com imagens PNG
function criarRelampago() {
  const img = document.createElement("img");
  img.src = "https://static.vecteezy.com/system/resources/previews/020/920/647/original/lightning-bolt-icon-png.png";
  img.className = "estrela";
  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 6000);
}
setInterval(criarRelampago, 1000);

// Botão modo escuro
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Criar ícone de personagem pelo JS
function criarIcone(url, x, y) {
  const icone = document.createElement("div");
  icone.className = "icon-capitao";
  icone.style.backgroundImage = `url(${url})`;
  icone.style.position = "absolute";
  icone.style.left = x + "px";
  icone.style.top = y + "px";
  document.body.appendChild(icone);
}

// Adiciona alguns personagens na tela
window.addEventListener("load", () => {
  criarIcone("https://static.wikia.nocookie.net/henrydanger/images/4/47/CaptainMan.png", 60, 300);
  criarIcone("https://static.wikia.nocookie.net/henrydanger/images/a/ab/HenryDangerSuit.png", 250, 350);
});
