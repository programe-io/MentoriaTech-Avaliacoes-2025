// Interatividade simples
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    alert(`Você clicou em: ${link.textContent}`);
  });
});
