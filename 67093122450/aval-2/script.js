// Apenas a Rolagem Suave

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Pega o ID alvo (ex: '#sobre' vira 'sobre')
    const targetId = this.getAttribute('href'). substring(1);
    const targetSection = document.getElementById( targetId);

    se (seção de destino) {
      // Rola suavemente até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

