document.addEventListener('DOMContentLoaded', function() {
    // 1. Variáveis e Seletores
    const formCompra = document.querySelector('.form-compra');
    const produtoCards = document.querySelectorAll('.produto-card');

    // --- 2. Funcionalidade de Destaque de Produto (Efeito de Hover/Click) ---
    
    produtoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Adiciona uma classe para destacar visualmente o cartão ao passar o mouse
            card.style.border = '2px solid var(--cor-principal)';
            card.style.boxShadow = '0 6px 10px rgba(233, 30, 99, 0.4)';
        });

        card.addEventListener('mouseleave', function() {
            // Remove o destaque ao tirar o mouse
            card.style.border = 'none';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        card.querySelector('.cta-button').addEventListener('click', function(event) {
            // Impede a rolagem padrão da âncora antes de focar o formulário
            event.preventDefault(); 
            
            // Pega o nome do produto no card
            const nomeProduto = card.querySelector('h4').textContent;
            
            // Foca o formulário
            const campoProduto = document.getElementById('produto');
            
            // Define o produto selecionado no dropdown do formulário
            // Nota: Isso depende dos 'value' das opções no HTML serem 'vermelho', 'nude', 'glitter', 'kit'
            
            let valorProduto = '';
            if (nomeProduto.includes('Vermelho')) {
                valorProduto = 'vermelho';
            } else if (nomeProduto.includes('Nude')) {
                valorProduto = 'nude';
            } else if (nomeProduto.includes('Glitter')) {
                valorProduto = 'glitter';
            }
            
            campoProduto.value = valorProduto;
            
            // Rola suavemente para a seção do formulário
            document.getElementById('compra').scrollIntoView({ behavior: 'smooth' });
            
            // Destaca o campo de seleção do produto por um momento
            campoProduto.focus();
            campoProduto.style.backgroundColor = '#fff0f5'; // Cor de destaque temporário
            setTimeout(() => {
                campoProduto.style.backgroundColor = 'var(--cor-clara)'; // Volta à cor normal
            }, 1000);
        });
    });

    // --- 3. Validação Simples do Formulário ---
    
    if (formCompra) {
        formCompra.addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário
            event.preventDefault(); 

            // Obtém os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const produto = document.getElementById('produto').value;
            const quantidade = parseInt(document.getElementById('quantidade').value);
            
            let isValido = true;
            let mensagemErro = '';

            // Validação do Nome
            if (nome.length < 3) {
                mensagemErro += '• Por favor, insira seu nome completo.\n';
                isValido = false;
            }

            // Validação do E-mail (Regex simples)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                mensagemErro += '• Por favor, insira um e-mail válido.\n';
                isValido = false;
            }

            // Validação do Produto Selecionado
            if (produto === '') {
                mensagemErro += '• Por favor, selecione um produto de interesse.\n';
                isValido = false;
            }

            // Validação da Quantidade
            if (isNaN(quantidade) || quantidade < 1) {
                mensagemErro += '• A quantidade deve ser no mínimo 1.\n';
                isValido = false;
            }

            // Resultado da Validação
            if (isValido) {
                // Se tudo estiver válido, simula o envio
                alert(`Pedido de ${nome} enviado com sucesso!\nProduto: ${produto.toUpperCase()} | Quantidade: ${quantidade}\n\nEntraremos em contato no e-mail: ${email}`);
                formCompra.reset(); // Limpa o formulário
                // Aqui você enviaria os dados para um servidor (backend)
            } else {
                // Mostra a mensagem de erro
                alert('Erro de Validação:\n' + mensagemErro);
            }
        });
    }
});