// Obtém o elemento <body> para aplicar as classes de tema
const body = document.body;

// Cria um novo botão para alternar o tema
const themeButton = document.createElement('button');
themeButton.textContent = 'Mudar Tema';
themeButton.id = 'theme-toggle-btn';

// Seleciona o elemento <header> para inserir o botão
const header = document.querySelector('header');

// Verifica se o header existe antes de adicionar o botão
if (header) {
    header.appendChild(themeButton);
}

// Função que será chamada ao clicar no botão
function toggleTheme() {
    // A função 'toggle' adiciona a classe se ela não estiver presente,
    // e remove se estiver presente. Isso alterna o tema.
    body.classList.toggle('dark-mode');

    // Altera o texto do botão para refletir a nova ação
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Mudar para Tema Claro';
    } else {
        themeButton.textContent = 'Mudar para Tema Escuro';
    }
}

// Adiciona um "ouvinte de evento" (event listener) ao botão
themeButton.addEventListener('click', toggleTheme);

console.log('Script JavaScript de interatividade carregado.');