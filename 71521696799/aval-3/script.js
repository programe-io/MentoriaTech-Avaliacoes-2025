document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------
    // 1. FUNCIONALIDADE DO CARRINHO (Contador e Botões de Compra)
    // -------------------------------------------------------------------

    // Seleciona o elemento que exibe o número de itens no carrinho no header
    const contadorCarrinho = document.querySelector('header nav ul li a[href="carrinho.html"]');
    // Seleciona todos os botões "Adicionar ao Carrinho"
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    
    // Variável para armazenar a contagem de itens (poderia ser armazenada em localStorage)
    let itensNoCarrinho = 0; 
    
    // Função para atualizar o texto do contador no cabeçalho
    function atualizarContador(quantidade) {
        contadorCarrinho.textContent = `🛒 Carrinho (${quantidade})`;
    }

    // Inicializa o contador
    atualizarContador(itensNoCarrinho);

    // Adiciona um evento de clique a cada botão de compra
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', () => {
            itensNoCarrinho++; // Incrementa o contador
            atualizarContador(itensNoCarrinho); // Atualiza o display

            // Feedback visual rápido
            botao.textContent = 'Adicionado!';
            botao.disabled = true; // Desabilita o botão para evitar cliques múltiplos imediatos
            
            // Volta ao estado normal após 1 segundo
            setTimeout(() => {
                botao.textContent = 'Adicionar ao Carrinho';
                botao.disabled = false;
            }, 1000);
            
            // Mensagem no console para fins de desenvolvimento
            console.log(`Item adicionado. Total de itens: ${itensNoCarrinho}`);
        });
    });
    

    // -------------------------------------------------------------------
    // 2. FUNCIONALIDADE DO FILTRO DE PREÇO (Slider Range)
    // -------------------------------------------------------------------
    
    // Seleciona o input range de preço
    const inputRange = document.getElementById('preco');
    // Seleciona o span onde o valor será exibido
    const valorPrecoSpan = document.getElementById('valor-preco');

    // Verifica se os elementos existem antes de adicionar o evento
    if (inputRange && valorPrecoSpan) {
        
        // Define o valor inicial do span para o valor inicial do input
        valorPrecoSpan.textContent = `R$ ${inputRange.value}`;

        // Adiciona um evento que dispara sempre que o slider é movido
        inputRange.addEventListener('input', () => {
            // Atualiza o texto do span com o valor atual do input
            valorPrecoSpan.textContent = `R$ ${inputRange.value}`;
        });
    

});