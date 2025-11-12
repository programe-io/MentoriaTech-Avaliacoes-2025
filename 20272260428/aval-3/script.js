// Função 1: Adiciona interatividade para destacar artigos ao passar o mouse

function adicionarEfeitosAosArtigos() {
    // 1. Seleciona todos os elementos <article> na página
    const artigos = document.querySelectorAll('article');

    // 2. Itera sobre cada artigo encontrado
    artigos.forEach(article => {
        // Adiciona um "ouvinte de evento" para quando o mouse entrar no artigo
        article.addEventListener('mouseenter', () => {
            // Adiciona a classe 'destaque' ao artigo
            article.classList.add('destaque');
        });

        // Adiciona um "ouvinte de evento" para quando o mouse sair do artigo
        article.addEventListener('mouseleave', () => {
            // Remove a classe 'destaque' do artigo
            article.classList.remove('destaque');
        });
    });
}

// Função 2: Exibe um alerta de boas-vindas
function exibirBoasVindas() {
    alert('Seja bem-vindo(a) ao PetFood Brasil! Sua fonte de nutrição para pets.');
}

// O código só será executado quando todo o HTML estiver carregado (evento 'DOMContentLoaded')
document.addEventListener('DOMContentLoaded', () => {
    // Chama as funções quando a página estiver pronta
    exibirBoasVindas();
    adicionarEfeitosAosArtigos();
});