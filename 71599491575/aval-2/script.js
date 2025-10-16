const btnMostrarMais = document.getElementById('btnMostrarMais');
const maisPersonagens = document.getElementById('maisPersonagens');

btnMostrarMais.addEventListener('click', () => {
  if (maisPersonagens.style.display === 'none') {
    maisPersonagens.style.display = 'block';
    btnMostrarMais.textContent = 'Mostrar Menos';
  } else {
    maisPersonagens.style.display = 'none';
    btnMostrarMais.textContent = 'Mostrar Mais';
  }
});p {
  margin: 5px 0 15px 20px; /* espaçamento para ficar visualmente agradável */
  font-size: 0.9rem;
  color: #ccc;
  font-style: italic;
}