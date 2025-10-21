// Array que simula o carrinho de compras
let carrinho = [];

// Função para atualizar a contagem de itens exibida no cabeçalho
function atualizarContadorCarrinho() {
    // Busca o elemento 🛒 Carrinho no NAV.
    // É recomendado adicionar um ID, mas vamos usar um seletor simples por enquanto.
    const linkCarrinho = document.querySelector('nav ul li a[href="#carrinho"]');

    if (linkCarrinho) {
        // Calcula o total de itens (se cada item adicionado for 1)
        const totalItens = carrinho.length; 
        
        // Atualiza o texto do link
        linkCarrinho.textContent = `🛒 Carrinho (${totalItens})`;
    }
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    // Cria um objeto simples para o produto
    const novoItem = {
        id: Date.now(), // ID simples baseado no timestamp
        nome: nomeProduto,
        quantidade: 1
    };

    // Adiciona o item ao array do carrinho
    carrinho.push(novoItem);
    
    // Alerta o usuário
    alert(`"${nomeProduto}" foi adicionado ao carrinho!`);

    // Atualiza o contador
    atualizarContadorCarrinho();
}

// Função principal para configurar os ouvintes de eventos
function configurarLoja() {
    
    // 1. Inicializa o contador de carrinho com zero
    atualizarContadorCarrinho();

    // 2. Adiciona ouvintes de evento aos botões "Comprar"
    
    // Seleciona todos os botões que estão dentro de um elemento com a classe 'produto'
    const botoesComprar = document.querySelectorAll('.produto button');

    // Itera sobre cada botão encontrado
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Previne o comportamento padrão do botão (se estivesse dentro de um form)
            evento.preventDefault();
            
            // Pega o elemento pai mais próximo do botão que tenha a classe 'produto'
            const produtoElemento = evento.target.closest('.produto');

            if (produtoElemento) {
                // Pega o nome do produto (conteúdo da tag <h3>)
                const nomeProduto = produtoElemento.querySelector('h3').textContent;
                
                // Chama a função de adicionar
                adicionarAoCarrinho(nomeProduto);
            }
        });
    });
}

// Garante que a função de configuração só será executada quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', configurarLoja);