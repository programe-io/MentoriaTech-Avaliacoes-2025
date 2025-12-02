// Arquivo: script.js

// Função para exibir uma saudação na página
function saudarMicaelyNunes() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia";
    } else if (hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    // Exibe a saudação no console, mas poderia ser em um elemento da página
    console.log(`${saudacao}, Micaely Nunes! Bem-vinda ao seu Blog de Jogos.`);

    // Exemplo de manipulação do DOM: Mudar a cor do primeiro post ao carregar
    const primeiroPost = document.querySelector('.lista-posts .post');
    if (primeiroPost) {
        primeiroPost.style.borderLeft = '5px solid #007BFF'; // Adiciona uma borda azul
    }
}

// Chama a função quando a página estiver totalmente carregada
window.onload = saudarMicaelyNunes;