// 1. Seleciona o botão pelo seu ID
const botao = document.getElementById('dicaBotao');

// 2. Define a função que será executada quando o botão for clicado
function mostrarDica() {
    // Lista de dicas ambientais
    const dicas = [
        "Economize água: feche a torneira ao escovar os dentes!",
        "Dê preferência a sacolas reutilizáveis em suas compras.",
        "Desligue os aparelhos eletrônicos da tomada quando não estiver usando.",
        "Separe o lixo corretamente para facilitar a reciclagem.",
        "Plante uma árvore ou comece uma pequena horta em casa."
    ];

    // Escolhe uma dica aleatoriamente
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];

    // Exibe a dica em uma caixa de alerta
    alert('🌱 Dica de Sustentabilidade: ' + dicaAleatoria);
}

// 3. Adiciona um 'ouvinte de evento' (event listener) ao botão
// Quando o evento 'click' ocorrer, a função 'mostrarDica' será chamada
botao.addEventListener('click', mostrarDica); 

// Você também pode adicionar um log no console para saber que o script carregou
console.log("Script de dicas ambientais carregado com sucesso!");