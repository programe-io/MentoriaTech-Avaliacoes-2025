// Variável para armazenar a contagem de itens no carrinho
let contagemCarrinho = 0;

// 1. Função para atualizar o número no ícone do carrinho
function atualizarContadorCarrinho() {
    // Busca o link do carrinho no HTML usando o seletor 'a[href="carrinho.html"]'
    const linkCarrinho = document.querySelector('a[href="carrinho.html"]');
    
    // Verifica se o elemento foi encontrado
    if (linkCarrinho) {
        // Atualiza o texto do link
        linkCarrinho.innerHTML = `🛒 Carrinho (${contagemCarrinho})`;
    }
}

// 2. Função principal para adicionar um item ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    // Aumenta a contagem
    contagemCarrinho++;
    
    // Atualiza o visual do contador
    atualizarContadorCarrinho();
    
    // Mostra um alerta (para demonstração)
    alert(`${nomeProduto} foi adicionado ao carrinho! Total de itens: ${contagemCarrinho}`);
    
    // Em uma aplicação real, você também adicionaria o produto a uma lista/array
    // para exibi-lo na página do carrinho (carrinho.html).
}

// 3. Adicionar um "Ouvinte de Evento" (EventListener) a todos os botões de "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os botões que estão dentro de um produto
    const botoesComprar = document.querySelectorAll('.produto button');

    // Itera sobre cada botão encontrado
    botoesComprar.forEach(button => {
        // Adiciona um evento de 'click' a cada botão
        button.addEventListener('click', () => {
            // Encontra o elemento 'article' pai (o cartão do produto)
            const produtoArticle = button.closest('.produto');
            
            // Pega o nome do produto (texto do <h3>)
            const nomeProduto = produtoArticle.querySelector('h3').innerText;
            
            // Chama a função de adicionar ao carrinho
            adicionarAoCarrinho(nomeProduto);
        });
    });
    
    // Garante que o contador inicial seja exibido corretamente (0)
    atualizarContadorCarrinho();
});