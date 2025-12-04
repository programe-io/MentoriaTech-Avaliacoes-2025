// === script.js ===

// Exemplo de mensagem quando a página carrega
window.addEventListener("load", () => {
  console.log("Página de Futebol carregada com sucesso!");
});

// Função simples para alertar envio do formulário de contato
const contatoForm = document.querySelector("form");

if (contatoForm) {
  contatoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado por entrar em contato.");
    contatoForm.reset();
  });
}

// Destaque visual nas imagens da galeria
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
