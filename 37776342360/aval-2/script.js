// Mensagem de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao site do Kauã! 🚀");
};

// Função para mudar cor da área de postagem
function mudarCorPostagem() {
    const content = document.querySelector('.content');
    
    // Cores aleatórias
    const cores = ['#f9f9f9', '#ffe4b5', '#d3f8e2', '#e0bbE4', '#fcd5ce'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    content.style.backgroundColor = corAleatoria;
}
