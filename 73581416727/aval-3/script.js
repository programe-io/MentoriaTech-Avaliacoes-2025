document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------
    // 1. Funcionalidade do Menu Responsivo
    // ------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navMenu.classList.toggle('active');

        // Alterna o ícone do menu (hamburguer para X)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar o menu ao clicar em um link (apenas no mobile)
    document.querySelectorAll('#nav-menu a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    // ------------------------------------
    // 2. Funcionalidade do Carrossel Simples
    // ------------------------------------
    const carouselSlide = document.querySelector('.carousel-slide');
    const motoCards = document.querySelectorAll('.moto-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0; // Índice da moto atual que deve ser o foco
    const cardWidth = motoCards[0].offsetWidth + 20; // Largura do card + margem (10px de cada lado)

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        // Move o slide para a posição do currentIndex
        carouselSlide.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Navegação para o próximo item
    nextBtn.addEventListener('click', () => {
        // Verifica se ainda não é o último item
        if (currentIndex < motoCards.length - 1) {
            currentIndex++;
        } else {
            // Volta para o primeiro (loop)
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Navegação para o item anterior
    prevBtn.addEventListener('click', () => {
        // Verifica se ainda não é o primeiro item
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Vai para o último (loop)
            currentIndex = motoCards.length - 1;
        }
        updateCarousel();
    });
});