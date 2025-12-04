document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Função para alternar o menu de navegação
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Adiciona ou remove a classe 'active' para mostrar/esconder o menu (estilizado no CSS)
            mainNav.classList.toggle('active');

            // Opcional: Altera o ícone do botão
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = '✕'; // Ícone de fechar
            } else {
                menuToggle.textContent = '☰'; // Ícone de menu
            }
        });
    }

    // Você poderia adicionar aqui outras funcionalidades como:
    // 1. Um carrossel de modelos (slider)
    // 2. Um efeito de rolagem suave (smooth scrolling)
    // 3. Validação de formulários (se você adicionar um formulário de Test Ride)
});