// Seleciona o botão
const botao = document.getElementById('btn-cor');

// Lista de cores para alternar
const cores = ['#f0f0f5', '#FFD700', '#90EE90', '#FF6347', '#87CEFA'];

botao.addEventListener('click', () => {
  // Escolhe uma cor aleatória
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  // Aplica ao fundo da página
  document.body.style.backgroundColor = corAleatoria;
});
