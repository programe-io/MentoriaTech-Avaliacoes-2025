// 💥 Efeito de fogo ao clicar no botão
const flames = document.getElementById('flames');
const button = document.getElementById('ignite');

button.addEventListener('click', () => {
  flames.style.opacity = 1;
  flames.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    flames.style.opacity = 0.7;
  }, 2000);
});
