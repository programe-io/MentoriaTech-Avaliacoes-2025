// Exemplo 1: Alerta ao clicar nas imagens da sidebar
const imagensSidebar = document.querySelectorAll('.sidebar img');

imagensSidebar.forEach(img => {
  img.addEventListener('click', () => {
    alert('Você clicou em uma imagem da galeria!');
  });
});

// Exemplo 2: Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', () => {
  console.log("Bem-vindo ao Meu Site!");
});

// Exemplo 3: Ao clicar no título da postagem, mudar a cor
const tituloPost = document.querySelector('.conteudo h2');
tituloPost.addEventListener('click', () => {
  tituloPost.style.color = tituloPost.style.color === 'orange' ? 'black' : 'orange';
});
