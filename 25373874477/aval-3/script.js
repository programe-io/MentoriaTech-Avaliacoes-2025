// === script.js para CETI Joel Ribeiro ===

// Mensagem ao carregar a página
window.addEventListener("load", () => {
  console.log("Página do CETI Joel Ribeiro carregada com sucesso!");
});

// Destacar imagens da galeria
const imagens = document.querySelectorAll("#galeria img");

imagens.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.2s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

// Função simples de formulário (caso exista no futuro)
const contatoForm = document.querySelector("form");

if (contatoForm) {
  contatoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    contatoForm.reset();
  });
}
