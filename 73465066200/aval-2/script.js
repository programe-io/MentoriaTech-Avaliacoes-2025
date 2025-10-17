const carros = document.querySelectorAll('.carro');

carros.forEach(carro => {
  carro.addEventListener('click', () => {
    carros.forEach(c => c.style.borderLeftColor = '#444'); // reset
    carro.style.borderLeftColor = '#e50914'; // destaque
    carro.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
