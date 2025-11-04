// Espera até que o conteúdo da página carregue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Efeito de hover no título do header
  const titulo = document.querySelector("header h1");

  titulo.addEventListener("mouseenter", () => {
    titulo.style.color = "#d96c6c"; // cor elegante de destaque
    titulo.textContent = "Studio BellaCabelos ✨";
  });

  titulo.addEventListener("mouseleave", () => {
    titulo.style.color = "";
    titulo.textContent = "Studio BellaCabelos";
  });

  // Interação com as imagens da galeria (clique para ampliar)
  const imagensGaleria = document.querySelectorAll(".gallery img");

  imagensGaleria.forEach((img) => {
    img.addEventListener("click", () => {
      // Cria um modal simples para exibir a imagem em tamanho maior
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="fechar">&times;</span>
          <img src="${img.src}" alt="Imagem ampliada">
        </div>
      `;
      document.body.appendChild(modal);

      // Fecha o modal ao clicar no botão "fechar"
      modal.querySelector(".fechar").addEventListener("click", () => {
        modal.remove();
      });

      // Fecha o modal ao clicar fora da imagem
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });
    });
  });
});
