/* app.js - Script para Rolagem Suave e Abas Ativas (Smooth Scroll & Active Link) */

document.addEventListener('DOMContentLoaded', () => {
    // 1. ROLAGEM SUAVE (SMOOTH SCROLL)
    const navLinks = document.querySelectorAll('.nav-turbo a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede a rolagem instantânea padrão do HTML

            // Obtém o destino (ID da seção)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição de rolagem, ajustando pela altura do header fixo (80px)
                const headerHeight = document.querySelector('header').offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Rola suavemente
                });
            }
        });
    });

    // 2. ABAS ATIVAS (ACTIVE LINKS) BASEADO NA POSIÇÃO DO SCROLL

    // Seleciona todas as seções que queremos monitorar (adicionamos a classe .section-scroll no HTML)
    const sections = document.querySelectorAll('.section-scroll');
    
    // Função para atualizar o estado ativo dos links
    const updateActiveLink = () => {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight || 80;
        const scrollPosition = window.scrollY + headerHeight + 10; // Adiciona margem

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Verifica se a seção está visível na área de visualização
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Remove a classe 'active' de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link correspondente
        if (current) {
            const activeLink = document.querySelector(`.nav-turbo a[href="#${current}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    };

    // Adiciona o listener para o evento de rolagem
    window.addEventListener('scroll', updateActiveLink);
    // Chama uma vez para definir o estado inicial
    updateActiveLink(); 
});