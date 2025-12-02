// Arquivo: script.js

// Função para exibir uma saudação e adicionar um efeito dinâmico
function iniciarBlog() {
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

    console.log(`${saudacao}, Klaryan Santos! Seja bem-vinda ao seu Blog de Jogos.`);

    // Efeito JavaScript: Adiciona uma sombra extra no post de destaque ao carregar
    const destaque = document.querySelector('.destaque .post');
    if (destaque) {
        destaque.style.boxShadow = '0 8px 15px rgba(138, 43, 226, 0.4)'; // Sombra roxa
    }
}

// Executa a função quando a página estiver carregada
window.onload = iniciarBlog;