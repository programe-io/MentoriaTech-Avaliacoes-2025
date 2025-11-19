document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona todos os botões com a classe 'action-btn'
    const actionButtons = document.querySelectorAll('.action-btn');

    // 2. Itera sobre a lista de botões
    actionButtons.forEach(button => {
        // 3. Adiciona um 'ouvinte de evento' de clique para cada botão
        button.addEventListener('click', function() {
            // Lógica a ser executada ao clicar no botão
            
            // Simula a ação de adicionar ao carrinho
            alert('Item do usuário Ruti adicionado ao carrinho!');

            // Aqui você colocaria código mais complexo, como:
            // - Enviar dados para um servidor (API)
            // - Atualizar o número de itens no carrinho na interface
            // - Alterar o visual do botão temporariamente
        });
    });

    console.log('Script de interatividade carregado.');
});