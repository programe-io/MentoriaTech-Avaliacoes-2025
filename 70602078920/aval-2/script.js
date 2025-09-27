// Apenas a Rolagem Suave (Smooth Scrolling)

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Pega o ID alvo (ex: '#sobre' vira 'sobre')
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Rola suavemente até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

