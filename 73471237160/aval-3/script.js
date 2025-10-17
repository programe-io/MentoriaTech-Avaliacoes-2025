const produtos = document.querySelectorAll('.produto');

produtos.forEach(produto => {
  produto.addEventListener('click', () => {
    produtos.forEach(p => p.style.borderLeftColor = '#a67c52'); // reset
    produto.style.borderLeftColor = '#d95d39'; // destaque
    produto.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
