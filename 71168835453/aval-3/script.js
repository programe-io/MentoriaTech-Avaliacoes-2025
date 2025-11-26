<script>
    // 1. Funcionalidade do Menu Responsivo
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe que define a altura máxima do menu
            mobileNav.classList.toggle('mobile-menu-open');
        });
    }

    // 2. Funcionalidade de Tempo de Postagem (atualiza para 'agora')
    // Esta parte simula uma atualização de tempo de postagem para dar um toque mais dinâmico.
    const timeSpans = document.querySelectorAll('.main span.text-xs.text-gray-400'); // Seleciona todos os spans de tempo

    timeSpans.forEach(span => {
        // Apenas para fins de demonstração, muda o texto para "Publicado agora"
        // Em um sistema real, você calcularia o tempo decorrido do timestamp.
        span.textContent = 'Publicado agora';
    });
</script>