// Arquivo: interacoes.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os elementos principais
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    // 2. Calcula a posição inicial da barra de navegação. 
    // É o ponto em que a NAV deve se tornar fixa.
    const navOffset = nav.offsetTop; 

    /**
     * Função responsável por adicionar ou remover a classe 'fixed-nav' 
     * dependendo da posição de rolagem da página.
     */
    function fixNavOnScroll() {
        // window.scrollY retorna a posição de rolagem vertical.
        if (window.scrollY >= navOffset) {
            // Se o usuário rolou para baixo o suficiente:
            
            // Adiciona a classe que aplica 'position: fixed' via CSS.
            nav.classList.add('fixed-nav');
            
            // Adiciona uma margem inferior ao <header> para evitar que 
            // o conteúdo "pule" ou seja escondido quando a NAV sai do fluxo normal.
            header.style.marginBottom = nav.offsetHeight + 'px'; 
        } else {
            // Se o usuário voltou para o topo da página:
            
            // Remove a classe fixa.
            nav.classList.remove('fixed-nav');
            
            // Remove a margem extra, voltando ao layout normal.
            header.style.marginBottom = '0';
        }
    }

    // 3. Adiciona o evento de rolagem (scroll) à janela, chamando a função.
    window.addEventListener('scroll', fixNavOnScroll);
    
    // Você pode adicionar outras interações JavaScript aqui, se necessário.
    
    console.log("TecnoCell Interações JS ativas!");
});