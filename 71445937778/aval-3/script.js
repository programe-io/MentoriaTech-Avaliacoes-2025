// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão de menu e a navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav[aria-label="Navegação Principal da Trilogia"]');

    // 2. Adiciona a classe 'mobile-menu-hidden' para garantir que a nav esteja oculta no celular
    // O Tailwind 'hidden md:flex' cuida disso, mas garantimos com o CSS puro:
    navMenu.classList.add('mobile-menu-hidden');

    // 3. Define a função de clique
    menuToggle.addEventListener('click', () => {
        // Alterna o estado 'active' do botão (muda o ícone para X)
        menuToggle.classList.toggle('active');

        // Alterna a classe 'mobile-menu-hidden' para mostrar/esconder o menu
        navMenu.classList.toggle('mobile-menu-hidden');

        // Opcional: Adiciona/remove classes Tailwind para visualização em modo mobile
        if (!navMenu.classList.contains('mobile-menu-hidden')) {
            // Se o menu for exibido, aplica o estilo de menu sobreposto
            navMenu.classList.remove('hidden');
            navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-blue-900', 'shadow-lg', 'p-4', 'z-10');
            navMenu.querySelector('ul').classList.remove('gap-6');
            navMenu.querySelector('ul').classList.add('flex-col', 'gap-4');
        } else {
            // Se o menu for escondido, restaura os estilos e oculta
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-blue-900', 'shadow-lg', 'p-4', 'z-10');
            navMenu.querySelector('ul').classList.add('gap-6');
            navMenu.querySelector('ul').classList.remove('flex-col', 'gap-4');
        }
    });
});