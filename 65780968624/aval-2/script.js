document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Pega o ID alvo (ex: '#analise' vira 'analise')
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Rola suavemente até a seção (o CSS cuida do ajuste da posição)
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});