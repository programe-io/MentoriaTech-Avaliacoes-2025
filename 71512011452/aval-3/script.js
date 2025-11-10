/* ---------- script.js ---------- */
// Destaca spans ao clicar neles
document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll("span");
  spans.forEach(span => {
    span.addEventListener("click", () => {
      span.classList.add("clicked");
      setTimeout(() => span.classList.remove("clicked"), 600);
    });
  });
});

// Efeito de clique animado (CSS controlado)
const style = document.createElement("style");
style.textContent = `
  span.clicked {
    background-color: rgba(192, 57, 43, 0.1);
    transform: scale(1.05);
    transition: transform 0.2s ease, background-color 0.4s ease;
  }
`;
document.head.appendChild(style);
