// Script básico para o seu site Free Fire
// Aqui você pode adicionar interações simples

console.log("Site Free Fire carregado!");

// Exemplo: Mudar o texto do botão ao passar o mouse
const dicasBtn = document.querySelector('.btn');
if (dicasBtn) {
  dicasBtn.addEventListener('mouseover', () => {
    dicasBtn.textContent = "Vamos lá!";
  });
  dicasBtn.addEventListener('mouseout', () => {
    dicasBtn.textContent = "Ver Dicas";
  });
}

// Exemplo: Animação simples ao rolar a página
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transition = '0.6s';
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});

// Configuração inicial para animação
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.transform = 'translateY(30px)';
    card.style.opacity = '0';
  });
});
