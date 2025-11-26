document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links na barra de navegação
    const navLinks = document.querySelectorAll('header nav a');
    const body = document.body;

    // Adiciona um listener de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne a navegação imediata para dar tempo ao efeito
            event.preventDefault();

            const targetUrl = link.getAttribute('href');

            // 1. Adiciona uma classe de transição mágica ao corpo
            // Isso pode ser uma explosão de cores, um desfoque, etc.
            body.classList.add('spell-cast-effect');

            // 2. Remove o efeito e navega após um pequeno atraso
            setTimeout(() => {
                body.classList.remove('spell-cast-effect');
                
                // Navega para a URL de destino (se for um link real)
                if (targetUrl && targetUrl !== '#') {
                    window.location.href = targetUrl;
                }
            }, 600); // 600ms, tempo suficiente para ver o efeito
        });
    });
});