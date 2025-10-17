// Alerta de boas-vindas
window.addEventListener('load', () => {
  console.log("Bem-vindo ao BetZone News!");
});

// Alternar modo noturno
const body = document.body;
const darkModeButton = document.createElement('button');
darkModeButton.textContent = "🌙 Modo Noturno";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "10px 15px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "5px";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.backgroundColor = "#ff3c3c";
darkModeButton.style.color = "white";

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

document.body.appendChild(darkModeButton);
