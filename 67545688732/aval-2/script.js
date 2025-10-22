/* ====================================
   1. FUNÇÃO MODO ESCURO (DARK MODE)
   ==================================== */

// Seletores para os elementos que mudarão de estilo
const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');
const toggleButton = document.getElementById('dark-mode-toggle');

// Classe CSS que contém os estilos do Dark Mode
const darkModeClass = 'dark-mode';

/**
 * Alterna entre o modo claro e escuro, adicionando/removendo a classe 'dark-mode'.
 */
function toggleDarkMode() {
    // Alterna a classe em todos os elementos principais
    body.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
    nav.classList.toggle(darkModeClass);
    aside.classList.toggle(darkModeClass); 
    
    // Atualiza o texto do botão
    if (body.classList.contains(darkModeClass)) {
        toggleButton.textContent = 'Modo Claro';
        // Salva a preferência do usuário (opcional)
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Modo Escuro';
        // Salva a preferência do usuário (opcional)
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Verifica a preferência salva no localStorage e aplica o tema ao carregar a página.
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        // Se o tema for 'dark', aplica as classes e atualiza o botão
        body.classList.add(darkModeClass);
        header.classList.add(darkModeClass);
        nav.classList.add(darkModeClass);
        aside.classList.add(darkModeClass);
        toggleButton.textContent = 'Modo Claro';
    } else {
        // Garante que o botão tenha o texto correto se o tema for 'light'
        toggleButton.textContent = 'Modo Escuro';
    }
}

// Event Listener para o botão de alternar o tema
toggleButton.addEventListener('click', toggleDarkMode);

// Carrega o tema quando a página é carregada
document.addEventListener('DOMContentLoaded', loadTheme);


/* ====================================
   2. FUNÇÃO MENU RESPONSIVO (MOBILE)
   ==================================== 
   
   NOTA: Você precisa adicionar um botão ou ícone de Menu Hamburger
   no seu HTML dentro do <header> e um ID ao seu <ul> de links na <nav>.
   Ex: <button id="menu-toggle">☰</button>
       <nav><ul id="main-menu-list">...</ul></nav>
*/

// Seletores
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('main-menu-list');

// Classe CSS que controla a exibição/ocultação do menu em mobile
const menuActiveClass = 'active-mobile';

if (menuToggle && menuList) {
    /**
     * Alterna a visibilidade do menu de navegação em telas pequenas.
     */
    function toggleMenu() {
        menuList.classList.toggle(menuActiveClass);

        // Opcional: Altera o texto/ícone do botão
        if (menuList.classList.contains(menuActiveClass)) {
            menuToggle.textContent = '✕'; // Ícone de fechar (X)
        } else {
            menuToggle.textContent = '☰'; // Ícone de menu (Hamburger)
        }
    }

    // Event Listener para o clique no botão do menu
    menuToggle.addEventListener('click', toggleMenu);

    // Opcional: Fechar o menu ao clicar em um link (âncora)
    const menuLinks = menuList.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Só fecha se estiver na visualização mobile (onde a classe está ativa)
            if (menuList.classList.contains(menuActiveClass)) {
                 menuList.classList.remove(menuActiveClass);
                 menuToggle.textContent = '☰';
            }
        });
    });
} else {
    console.warn("Elemento 'menu-toggle' ou 'main-menu-list' não encontrado. O menu responsivo pode não funcionar.");
}