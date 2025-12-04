document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Verifica se os elementos existem antes de adicionar o listener
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' na navegação
            mainNav.classList.toggle('active');

            // Opcional: Altera o ícone do botão
            if (mainNav.classList.contains('active')) {
                menuToggle.textContent = '✕'; // Ícone de fechar
            } else {
                menuToggle.textContent = '☰'; // Ícone de menu
            }
        });
    }

    // Se você tivesse um carrossel de imagens (slider)
    // Aqui você adicionaria a lógica para avançar/voltar slides:
    /*
    const slider = document.querySelector('.slider');
    let currentSlide = 0;
    
    function nextSlide() {
        // Lógica para mudar a imagem visível no slider
    }
    // ...
    */
});