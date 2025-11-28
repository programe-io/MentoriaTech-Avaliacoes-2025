document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões que têm a classe 'card-button'
    const buttons = document.querySelectorAll('.card-button');

    // 2. Itera sobre cada botão
    buttons.forEach(button => {
        // 3. Adiciona um 'ouvinte de evento' para o clique
        button.addEventListener('click', (event) => {
            // 4. Previne a ação padrão do botão (se for um form, por exemplo)
            event.preventDefault();

            // 5. Captura o valor do atributo 'data-model' (que definimos no HTML)
            const model = event.currentTarget.getAttribute('data-model');
            
            // 6. Define a mensagem com base no modelo
            const message = `Você selecionou o ${model}. Em breve, mais informações e links de compra estarão disponíveis aqui!`;

            // 7. Exibe um alerta simples
            alert(message);

            // *EXEMPLO DE FUNCIONALIDADE AVANÇADA (OPCIONAL)*
            // Você também poderia enviar o modelo selecionado para uma função de rastreamento (analytics)
            console.log(`Modelo rastreado: ${model}`);
        });
    });
});