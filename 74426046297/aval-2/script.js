// Seleciona todos os artigos (notícias)
const artigos = document.querySelectorAll('.noticia');

// Ao clicar em um artigo, ele ganha destaque e uma curiosidade aparece
artigos.forEach(artigo => {
  artigo.addEventListener('click', () => {
    // Remove destaque anterior
    artigos.forEach(a => a.classList.remove('ativo'));

    // Adiciona destaque no artigo clicado
    artigo.classList.add('ativo');

    // Exibe uma mensagem com o nome do animal
    const nomeAnimal = artigo.querySelector('strong').innerText;
    alert(`🐾 Você abriu o artigo sobre: ${nomeAnimal}!`);
  });
});

// Efeito visual de destaque
const style = document.createElement('style');
style.innerHTML = `
  .noticia.ativo {
    border: 2px solid #4e937a;
    box-shadow: 0 0 15px rgba(78, 147, 122, 0.4);
  }
`;
document.head.appendChild(style);
