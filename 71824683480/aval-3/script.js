<script>
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Adiciona um listener de clique ao botão do menu
        menuButton.addEventListener('click', function() {
            // Alterna a classe 'hidden' na navegação mobile
            mobileMenu.classList.toggle('hidden');
            
            // Opcional: Adicionar classe para transição suave (se necessário)
            // mobileMenu.classList.toggle('flex');
            // mobileMenu.classList.toggle('flex-col');
        });
    });
</script>