document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // 1. Previne o salto instantâneo padrão do navegador
    e.preventDefault();

    // 2. Obtém o ID alvo (ex: de '#analise' para 'analise')
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // 3. Rola suavemente até a seção alvo
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});