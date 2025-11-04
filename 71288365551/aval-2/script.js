// Espera até que o conteúdo da página carregue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Saudação personalizada
  const titulo = document.querySelector("header h1");
  titulo.addEventListener("mouseenter", () => {
    titulo.style.color = "#ff6600";
    titulo.textContent = "🎮 Bem-vindo ao Universo dos Jogos Digitais!";
  });

  titulo.addEventListener("mouseleave", () => {
    titulo.style.color = "";
    titulo.textContent = "universo dos jogos ditais";
  });

  // Interação com as imagens da galeria (ampliação e destaque)
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

      // Fecha o modal
      modal.querySelector(".fechar").addEventListener("click", () => {
        modal.remove();
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });
    });
  });

  // Botão interativo para mostrar uma curiosidade aleatória
  const curiosidades = [
    "O primeiro jogo eletrônico foi criado em 1958 e se chamava 'Tennis for Two'.",
    "O jogo mais vendido de todos os tempos é Minecraft.",
    "Pac-Man foi inspirado em uma pizza com um pedaço faltando!",
    "O nome 'Nintendo' significa 'deixe a sorte para o céu' em japonês."
  ];

  const botaoCuriosidade = document.createElement("button");
  botaoCuriosidade.textContent = "🎲 Mostrar uma curiosidade gamer";
  botaoCuriosidade.style.marginTop = "20px";
  document.querySelector("main").appendChild(botaoCuriosidade);

  const paragrafoCuriosidade = document.createElement("p");
  paragrafoCuriosidade.classList.add("curiosidade");
  document.querySelector("main").appendChild(paragrafoCuriosidade);

  botaoCuriosidade.addEventListener("click", () => {
    const random = Math.floor(Math.random() * curiosidades.length);
    paragrafoCuriosidade.textContent = curiosidades[random];
  });
});
