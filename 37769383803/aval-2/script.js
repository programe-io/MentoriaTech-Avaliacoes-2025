// Alternar visibilidade do aside
const toggleBtn = document.getElementById("toggle-aside");
const aside = document.getElementById("space-facts");

toggleBtn.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});
const curiosidades = [
  "A luz do Sol leva cerca de 8 minutos para chegar à Terra.",
  "Júpiter é tão grande que caberiam mais de 1300 Terras dentro dele.",
  "A estrela mais próxima, Proxima Centauri, está a 4,24 anos-luz.",
  "Um dia em Vênus dura mais do que um ano em Vênus."
];

function mostrarCuriosidade() {
  const aside = document.getElementById("space-facts");
  const random = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  aside.innerHTML = `<h4>Curiosidade espacial</h4><p>${random}</p>`;
}

// Exibir curiosidade nova a cada 10 segundos
setInterval(mostrarCuriosidade, 10000);
aside.addEventListener("transitionend", () => {
  aside.style.boxShadow = "0 0 20px rgba(160,123,255,0.6)";
  setTimeout(() => {
    aside.style.boxShadow = "";
  }, 1500);
});