// Constante para a chave do localStorage, garantindo que o carrinho persista
const STORAGE_KEY = 'carrinhoGamesTurbos';

// Array que armazena os itens no carrinho. 
// Inicializa tentando carregar dados do localStorage ou começa vazio.
let carrinho = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// ----------------------------------------------------------------
// Funções de Utilitário e Persistência
// ----------------------------------------------------------------

/**
 * Salva o estado atual do carrinho no LocalStorage.
 */
function salvarCarrinho() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrinho));
}

/**
 * Formata um número para o padrão monetário brasileiro (R$ 0,00).
 * @param {number} valor - O valor a ser formatado.
 */
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

// ----------------------------------------------------------------
// Lógica do Carrinho
// ----------------------------------------------------------------

/**
 * Adiciona um jogo/console ao carrinho ou aumenta sua quantidade.
 * @param {string} id - ID único do produto (do atributo data-id do HTML).
 * @param {string} nome - Nome do produto (do atributo data-nome do HTML).
 * @param {number} preco - Preço do produto (do atributo data-preco do HTML).
 */
function adicionarAoCarrinho(id, nome, preco) {
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        // Se existir, apenas aumenta a quantidade
        itemExistente.quantidade++;
    } else {
        // Se não existir, adiciona o novo item
        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarCarrinhoHTML();
    // Feedback visual (pode ser substituído por um toast/popup mais elaborado)
    console.log(`[Carrinho] "${nome}" adicionado(a).`);
}

/**
 * Remove ou diminui a quantidade de um item do carrinho.
 * @param {string} id - ID do produto a ser removido/diminuído.
 */
function removerDoCarrinho(id) {
    const itemIndex = carrinho.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        if (carrinho[itemIndex].quantidade > 1) {
            // Diminui a quantidade
            carrinho[itemIndex].quantidade--;
        } else {
            // Remove o item se a quantidade for 1
            carrinho.splice(itemIndex, 1);
        }
    }
    
    salvarCarrinho();
    atualizarCarrinhoHTML();
}

// ----------------------------------------------------------------
// Renderização e Atualização do HTML
// ----------------------------------------------------------------

/**
 * Renderiza o carrinho e o total no elemento <aside> no HTML.
 * Esta é a função mais importante, pois atualiza a interface.
 */
function atualizarCarrinhoHTML() {
    const itensCarrinhoDiv = document.getElementById('itens-carrinho');
    const valorTotalSpan = document.getElementById('valor-total');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    let total = 0;

    // Limpa o conteúdo atual do carrinho
    itensCarrinhoDiv.innerHTML = '';

    if (carrinho.length === 0) {
        // Exibe mensagem de carrinho vazio
        itensCarrinhoDiv.innerHTML = '<p>Seu carrinho está vazio. Que tal adicionar um console personalizado?</p>';
        valorTotalSpan.textContent = formatarMoeda(0);
        finalizarCompraBtn.style.display = 'none';
        return;
    }

    // Itera sobre os itens do carrinho para criar o HTML e calcular o total
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item-game'); 
        itemDiv.innerHTML = `
            <div>
                <span>${item.nome}</span>
                <span class="quantidade-carrinho"> (x${item.quantidade})</span>
            </div>
            <div class="item-actions">
                <span class="preco-item">${formatarMoeda(subtotal)}</span>
                <button class="btn-remover-game" data-id="${item.id}">-1</button>
            </div>
        `;
        itensCarrinhoDiv.appendChild(itemDiv);
    });

    // Atualiza o valor total e exibe o botão de finalização
    valorTotalSpan.textContent = formatarMoeda(total);
    finalizarCompraBtn.style.display = 'block';

    // Adiciona ouvintes de evento aos botões de remoção recém-criados
    document.querySelectorAll('.btn-remover-game').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            removerDoCarrinho(id);
        });
    });
}

// ----------------------------------------------------------------
// Inicialização: Configuração dos Event Listeners
// ----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Configura os ouvintes para os botões "Adicionar ao Carrinho"
    document.querySelectorAll('.adicionar-carrinho').forEach(button => {
        button.addEventListener('click', (event) => {
            // Busca o elemento pai do produto (a tag <article> com a classe .produto)
            const produtoElement = event.target.closest('.produto'); 

            if (!produtoElement) return;

            // Extrai os dados do produto usando os atributos 'data-' do HTML
            const id = produtoElement.getAttribute('data-id');
            const nome = produtoElement.getAttribute('data-nome');
            const preco = parseFloat(produtoElement.getAttribute('data-preco')); 

            adicionarAoCarrinho(id, nome, preco);
        });
    });

    // 2. Configura o ouvinte para o botão "Finalizar Compra"
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        if (carrinho.length > 0) {
            const totalCompra = document.getElementById('valor-total').textContent;
            alert(`Compra na Games Turbos finalizada! Total: ${totalCompra}. Sua máquina de games personalizada será enviada em breve!`);
            
            // Limpa o carrinho e o armazenamento local após a "compra"
            carrinho = []; 
            localStorage.removeItem(STORAGE_KEY); 
            atualizarCarrinhoHTML(); 
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // 3. Carrega e renderiza o carrinho ao iniciar a página
    atualizarCarrinhoHTML();
});