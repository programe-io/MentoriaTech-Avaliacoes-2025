// Espera o documento HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleciona o botão de compra usando o ID que demos a ele no HTML
    const botaoComprar = document.getElementById('botao-comprar');
    
    // 2. Verifica se o botão existe antes de tentar adicionar um evento a ele
    if (botaoComprar) {
        
        // 3. Adiciona um "ouvinte" (listener) que espera o evento de 'click' acontecer
        botaoComprar.addEventListener('click', function() {
            
            // 4. A ação que é executada: exibe um pop-up de alerta no navegador
            alert('Parabéns! Você adicionou a Maçã Gala ao seu carrinho. Prossiga para o checkout!');
            
            // Em um site real, este seria o ponto onde você enviaria dados 
            // sobre o produto para o servidor para processar a compra.
        });
    }
});