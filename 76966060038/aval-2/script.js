/*
  Arquivo: script.js
  Funcionalidades Interativas para a Loja de Moda Íntima "Delicadeza Íntima"
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecionar o elemento que mostra a contagem do carrinho
    const contadorCarrinho = document.querySelector('#carrinho a');
    let totalItensCarrinho = 0;

    // 2. Selecionar todos os botões de "Comprar"
    const botoesComprar = document.querySelectorAll('.produto-card button');

    /**
     * Função que simula a adição de um item ao carrinho
     */
    function adicionarAoCarrinho(evento) {
        // Encontrar o elemento pai (o cartão do produto)
        const card = evento.target.closest('.produto-card');
        const nomeProduto = card.querySelector('h3').textContent;
        
        // Simular a adição:
        totalItensCarrinho++;
        
        // 3. Atualizar a exibição do carrinho
        contadorCarrinho.textContent = `Carrinho (${totalItensCarrinho})`;

        // 4. Feedback visual (alerta e mudança temporária no botão)
        alert(`"${nomeProduto}" foi adicionado ao seu carrinho!`);
        
        // Efeito visual temporário no botão
        const botao = evento.target;
        const textoOriginal = botao.textContent;
        
        botao.textContent = 'Adicionado!';
        botao.disabled = true; // Desabilita para evitar múltiplos cliques rápidos
        
        setTimeout(() => {
            botao.textContent = textoOriginal;
            botao.disabled = false;
        }, 1500); // Retorna ao normal após 1.5 segundos
    }

    // 5. Adicionar o Listener de evento a cada botão
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });


    // ----------------------------------------------------
    // 6. Funcionalidade extra: Simular a assinatura da Newsletter
    // ----------------------------------------------------
    const formularioNewsletter = document.querySelector('#newsletter form');

    formularioNewsletter.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o envio real do formulário
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (email) {
            alert(`Obrigado por assinar! Você receberá ofertas em: ${email}`);
            formularioNewsletter.reset(); // Limpa o formulário
        }
    });

});