// interacoes.js

// Mensagem de boas-vindas animada
document.addEventListener("DOMContentLoaded", () => {
  alert("👊 Bem-vindo ao universo de Dragon Ball Z! Prepare-se para liberar o seu Ki!");

  const header = document.querySelector("header h1");
  header.classList.add("brilhando");

  // Efeito sonoro (opcional)
  const audio = new Audio("https://www.myinstants.com/media/sounds/kamehameha.mp3");
  header.addEventListener("click", () => {
    alert("KAMEHAMEHAAA!!! 💥");
    audio.play();
  });
});

// Animação nas imagens da galeria
const galeria = document.querySelectorAll(".gallery img");
galeria.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
    img.style.transition = "0.3s";
    img.style.boxShadow = "0 0 20px gold";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "none";
  });
});

// Efeito de energia no título principal
const titulo = document.querySelector("header h1");
titulo.addEventListener("mouseover", () => {
  titulo.style.textShadow = "0 0 20px yellow, 0 0 40px orange";
});
titulo.addEventListener("mouseout", () => {
  titulo.style.textShadow = "none";
});

// Botão secreto para transformação Super Saiyajin
const botaoSaiyajin = document.createElement("button");
botaoSaiyajin.textContent = "🌟 Transformar em Super Saiyajin!";
botaoSaiyajin.style.display = "block";
botaoSaiyajin.style.margin = "20px auto";
botaoSaiyajin.style.padding = "10px 20px";
botaoSaiyajin.style.fontSize = "18px";
botaoSaiyajin.style.cursor = "pointer";
botaoSaiyajin.style.background = "gold";
botaoSaiyajin.style.border = "none";
botaoSaiyajin.style.borderRadius = "10px";
botaoSaiyajin.style.boxShadow = "0 0 15px yellow";

document.body.appendChild(botaoSaiyajin);

// Efeito ao clicar no botão
botaoSaiyajin.addEventListener("click", () => {
  document.body.style.background = "radial-gradient(circle, yellow, orange, red)";
  document.body.style.transition = "2s";

  const audioTransform = new Audio("https://www.myinstants.com/media/sounds/dbz-power-up.mp3");
  audioTransform.play();

  const msg = document.createElement("h2");
  msg.textContent = "🔥 Você atingiu o nível Super Saiyajin! 🔥";
  msg.style.textAlign = "center";
  msg.style.color = "white";
  msg.style.textShadow = "0 0 15px yellow";
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 4000);
});

// Efeito de clique em imagens principais
const imagemPrincipal = document.querySelector(".post-image");
if (imagemPrincipal) {
  imagemPrincipal.addEventListener("click", () => {
    alert("⚡ O Torneio do Poder começou! Mostre sua força!");
    imagemPrincipal.style.filter = "brightness(1.5)";
    setTimeout(() => {
      imagemPrincipal.style.filter = "none";
    }, 1000);
  });
}

// Animação suave no scroll
window.addEventListener("scroll", () => {
  const altura = window.scrollY;
  const header = document.querySelector("header");
  header.style.opacity = Math.max(1 - altura / 400, 0.5);
});
