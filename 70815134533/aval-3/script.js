<script>
    // Seleciona o botão de menu e o elemento de navegação (nav)
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Adiciona um "listener" para o clique no botão
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' para mostrar ou esconder o menu
            navMenu.classList.toggle('hidden');
        });
    }
</script>