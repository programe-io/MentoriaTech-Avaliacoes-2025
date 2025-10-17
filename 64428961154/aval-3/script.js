// Boas-vindas
window.addEventListener('load', () => {
  console.log("Bem-vindo ao GTA 5 Master Guide!");
});

// Modo noturno
const body = document.body;
const darkModeButton = document.createElement('button');
darkModeButton.textContent = "🌙 Modo Noturno";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "12px 18px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "8px";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.backgroundColor = "#ff416c";
darkModeButton.style.color = "white";
darkModeButton.style.fontWeight = "bold";
darkModeButton.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.3)";
darkModeButton.style.transition = "all 0.3s";

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

document.body.appendChild(darkModeButton);
