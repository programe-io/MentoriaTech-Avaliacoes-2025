// Função para alternar as informações da seção principal
function mostrarInformacaoRacas() {
    // 1. Pega o elemento parágrafo que queremos mudar (assumindo que ele tem um ID)
    const paragrafoInfo = document.getElementById('info-cavalo');
    
    // 2. Verifica se o parágrafo existe
    if (paragrafoInfo) {
        // Texto que será exibido após o clique
        const novoTexto = "As raças de cavalos são vastas e variadas: do veloz Quarto de Milha ao nobre Andaluz, cada uma com características únicas adaptadas a diferentes trabalhos e esportes. A equitação é uma arte milenar!";
        
        // Altera o conteúdo do parágrafo
        paragrafoInfo.innerHTML = novoTexto;
        
        // Opcional: Desabilita o botão após o clique para evitar cliques repetidos
        const botao = document.querySelector('.botao');
        botao.innerHTML = "Raças Carregadas!";
        botao.disabled = true; // Desabilita o botão
    }
}

// Esta parte é a que associa o evento
// 1. Espera que o DOM (Document Object Model) esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // 2. Pega o elemento botão pela sua classe
    const botaoRacas = document.querySelector('.botao');
    
    // 3. Adiciona um "ouvinte de evento" (event listener) de clique ao botão
    if (botaoRacas) {
        botaoRacas.addEventListener('click', mostrarInformacaoRacas);
    }
});