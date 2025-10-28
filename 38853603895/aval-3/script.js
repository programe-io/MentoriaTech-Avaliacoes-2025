// Script simples de curtidas
const botoes = document.querySelectorAll('.like-btn');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    if (botao.classList.contains('liked')) {
      botao.classList.remove('liked');
      botao.textContent = 'Curtir ❤️';
    } else {
      botao.classList.add('liked');
      botao.textContent = 'Curtido 💖';
    }
  });
});