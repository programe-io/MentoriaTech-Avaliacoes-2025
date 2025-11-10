/* =========================================
   Barbie Princesa Brilho Mágico ✨
   Arquivo: script.js
   ========================================= */

// 🌟 Mensagem de boas-vindas
window.addEventListener("DOMContentLoaded", () => {
  const mensagem = document.createElement("div");
  mensagem.className = "boas-vindas";
  mensagem.textContent = "✨ Bem-vinda ao Reino do Brilho Mágico! ✨";
  document.body.appendChild(mensagem);

  setTimeout(() => mensagem.classList.add("mostrar"), 300);
  setTimeout(() => mensagem.remove(), 4500);
});

// 💖 Botão modo mágico (ativa música + muda tema)
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.createElement("button");
  botao.textContent = "🌈 Ativar Modo Mágico";
  botao.className = "botao-magico";
  document.body.appendChild(botao);

  // 🎵 Música de fundo (royalty-free)
  const musica = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_f89b77ed70.mp3?filename=magical-sparkle-106365.mp3");
  musica.loop = true;
  musica.volume = 0.4; // volume suave

  botao.addEventListener("click", () => {
    document.body.classList.toggle("modo-magico");

    if (document.body.classList.contains("modo-magico")) {
      botao.textContent = "💤 Desativar Modo Mágico";
      musica.play();
    } else {
      botao.textContent = "🌈 Ativar Modo Mágico";
      musica.pause();
    }
  });
});

// 🌟 Estrelas brilhando no fundo
function criarEstrela() {
  const estrela = document.createElement("div");
  estrela.classList.add("estrela");
  estrela.style.left = Math.random() * 100 + "vw";
  estrela.style.animationDuration = 3 + Math.random() * 2 + "s";
  estrela.style.opacity = 0.5 + Math.random() * 0.5;
  document.body.appendChild(estrela);

  setTimeout(() => estrela.remove(), 5000);
}

setInterval(criarEstrela, 700);