// Acessibilidade: foco visível ao navegar por teclado
(function addFocusStyle() {
  const style = document.createElement('style');
  style.textContent = `
    a:focus, button:focus { outline: 2px solid #6fdc8c; outline-offset: 2px; }
  `;
  document.head.appendChild(style);
})();

// Mensagem de carregamento no console
window.addEventListener('DOMContentLoaded', () => {
  console.log('Site Mundo Minecraft carregado com sucesso.');
});

// Interação simples: aviso ao abrir a galeria
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.btn.primary[href="#galeria"]')) {
    alert('Você está entrando na galeria do Mundo Minecraft!');
  }
});
