/* === INTERAÇÕES "APPLE STYLE" PARA MUNDO NEYMAR === */
/* Suaves, elegantes e responsivas ⚽🍏 */

document.addEventListener("DOMContentLoaded", () => {

  // ===== 1️⃣ EFEITO DE APARECER SUAVEMENTE =====
  const fadeElements = document.querySelectorAll("header, main, aside, footer, nav");

  fadeElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
  });

  window.addEventListener("load", () => {
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 200 * index);
    });
  });

  // ===== 2️⃣ NAVBAR COM EFEITO DE VIDRO QUANDO ROLA =====
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.backdropFilter = "blur(12px)";
      nav.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
      nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
    } else {
      nav.style.backdropFilter = "blur(0px)";
      nav.style.backgroundColor = "#fff";
      nav.style.boxShadow = "none";
    }
  });

  // ===== 3️⃣ ANIMAÇÃO SUAVE NA GALERIA =====
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(1.07)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transformOrigin = "center";
      img.style.transform = "scale(1)";
    });
  });

  // ===== 4️⃣ MODO ESCURO AUTOMÁTICO (estilo macOS) =====
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(e) {
    if (e.matches) {
      document.body.style.backgroundColor = "#111";
      document.body.style.color = "#eee";
      document.querySelectorAll("aside, main, nav, header, footer").forEach(el => {
        el.style.backgroundColor = "rgba(25,25,25,0.9)";
        el.style.color = "#eee";
        el.style.boxShadow = "0 2px 20px rgba(255,255,255,0.05)";
      });
    } else {
      document.body.style.backgroundColor = "#f8f8f8";
      document.body.style.color = "#1d1d1f";
      document.querySelectorAll("aside, main, nav, header, footer").forEach(el => {
        el.style.backgroundColor = "";
        el.style.color = "";
        el.style.boxShadow = "";
      });
    }
  }

  prefersDark.addEventListener("change", applyTheme);
  applyTheme(prefersDark);

  // ===== 5️⃣ EFEITO DE PARALLAX NO CABEÇALHO =====
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.style.backgroundPositionY = `${scrollY * 0.4}px`;
    header.style.opacity = 1 - scrollY / 600;
  });

  // ===== 6️⃣ EFEITO DE CURSOR LUMINOSO (leve brilho ao mover o mouse) =====
  const cursorLight = document.createElement("div");
  cursorLight.style.position = "fixed";
  cursorLight.style.width = "80px";
  cursorLight.style.height = "80px";
  cursorLight.style.borderRadius = "50%";
  cursorLight.style.pointerEvents = "none";
  cursorLight.style.background = "radial-gradient(circle, rgba(0,113,227,0.25) 0%, transparent 80%)";
  cursorLight.style.transition = "transform 0.15s ease-out";
  cursorLight.style.zIndex = "1000";
  document.body.appendChild(cursorLight);

  document.addEventListener("mousemove", (e) => {
    cursorLight.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
  });
});
