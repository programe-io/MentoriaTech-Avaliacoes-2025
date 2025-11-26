// Exemplo simples de interação
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
      alert('Você clicou no card: ' + this.querySelector('h2').innerText);
        });
        });