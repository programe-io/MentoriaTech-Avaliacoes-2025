💻 Código JavaScript Simples (ricardo-muniz.js)
O JavaScript é a linguagem que adiciona interatividade e comportamento dinâmico à sua página HTML e CSS.

Para começar, vamos criar um script simples que exibe uma mensagem de boas-vindas personalizada e muda o conteúdo de um parágrafo ao clicar em um botão.

1. O Código JavaScript
Você pode salvar este código em um arquivo chamado ricardo-muniz.js:

JavaScript
// Função que será executada quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Saudação Simples no Console
    console.log("Olá! O JavaScript para a página de Ricardo Muniz está rodando.");
    
    // 2. Variáveis e Manipulação de Elementos
    
    // Seleciona o botão pelo seu ID (precisamos adicionar o ID no HTML)
    const botao = document.getElementById('botao-interativo');
    
    // Seleciona o parágrafo onde o texto será alterado
    const paragrafo = document.getElementById('texto-dinamico');
    
    // 3. Adiciona um "Ouvinte de Evento" (Event Listener)
    // Quando o botão for clicado, a função anônima será executada
    if (botao) {
        botao.addEventListener('click', function() {
            
            // Altera o texto do parágrafo
            if (paragrafo) {
                paragrafo.textContent = "🥳 O texto foi alterado! Isso é o JavaScript em ação, respondendo ao seu clique.";
                
                // Exemplo de Estilo Dinâmico: Muda a cor do texto
                paragrafo.style.color = '#dc3545'; // Cor vermelha
                paragrafo.style.fontWeight = 'bold';
            \} else {
                console.error("Erro: Elemento 'texto-dinamico' não encontrado no HTML.");
            \}
        \});
    \} else {
        console.error("Erro: Botão 'botao-interativo' não encontrado no HTML.");
    \}
\});$0