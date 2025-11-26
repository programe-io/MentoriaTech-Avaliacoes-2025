<script>
    document.addEventListener('DOMContentLoaded', function() {
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');

        menuButton.addEventListener('click', function() {
            // 1. Alterna a visibilidade do menu
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // 2. Alterna os ícones do menu (Hambúrguer <-> X)
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });
    });
</script>