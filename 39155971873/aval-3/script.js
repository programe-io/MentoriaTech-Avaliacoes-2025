// Mostra alerta ao clicar no nome
document.querySelector('.profile h2').addEventListener('click', () => {
  alert('Perfil de FroJho aberto!');
});

// Alterna modo escuro/claro
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Altera o ícone
  if (document.body.classList.contains('dark')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});
