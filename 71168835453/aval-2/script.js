// interacoes.js

// ===== Animação suave ao rolar =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(17, 17, 17, 0.95)";
    header.style.transition = "0.5s";
  } else {
    header.style.background = "linear-gradient(90deg, #111, #1a1a1a, #111)";
  }
});

// ===== Efeito hover nos links de navegação =====
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.textShadow = "0 0 8px #b40000";
  });
  link.addEventListener("mouseout", () => {
    link.style.textShadow = "none";
  });
});

// ===== Zoom nas imagens da galeria =====
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const zoom = document.createElement("div");
    zoom.classList.add("zoom");
    zoom.innerHTML = `<img src="${img.src}" alt="Zoom"/>`;
    document.body.appendChild(zoom);
    zoom.addEventListener("click", () => zoom.remove());
  });
});

// ===== Botão de voltar ao topo =====
const topButton = document.createElement("button");
topButton.textContent = "⬆ Topo";
topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.padding = "10px 15px";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.background = "#b40000";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 0 10px rgba(180,0,0,0.4)";
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 300 ? "block" : "none";
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Estilo do zoom =====
const style = document.createElement("style");
style.innerHTML = `
.zoom {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.zoom img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(180,0,0,0.5);
}
`;
document.head.appendChild(style);
