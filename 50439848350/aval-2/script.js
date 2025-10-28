// Alterna o modo escuro
const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  darkBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('modoEscuro', isDark);
});

// Mantém o modo escuro salvo
window.addEventListener('load', () => {
  const isDark = localStorage.getItem('modoEscuro') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
    darkBtn.textContent = '☀️';
  }
});
