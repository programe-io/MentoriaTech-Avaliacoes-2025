class Carrinho {
    constructor() {
        this.itens = [];
        this.total = 0;
        this.carregarCarrinho();
        this.atualizarCarrinho();
    }

    adicionarItem(produto, preco) {
        const itemExistente = this.itens.find(item => item.produto === produto);
        
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            this.itens.push({
                produto: produto,
                preco: parseFloat(preco),
                quantidade: 1
            });
        }
        
        this.salvarCarrinho();
        this.atualizarCarrinho();
        this.mostrarMensagem(`${produto} adicionado ao carrinho!`);
    }

    removerItem(produto) {
        this.itens = this.itens.filter(item => item.produto !== produto);
        this.salvarCarrinho();
        this.atualizarCarrinho();
    }

    alterarQuantidade(produto, novaQuantidade) {
        if (novaQuantidade <= 0) {
            this.removerItem(produto);
            return;
        }

        const item = this.itens.find(item => item.produto === produto);
        if (item) {
            item.quantidade = novaQuantidade;
            this.salvarCarrinho();
            this.atualizarCarrinho();
        }
    }

    calcularTotal() {
        this.total = this.itens.reduce((acc, item) => {
            return acc + (item.preco * item.quantidade);
        }, 0);
    }

    atualizarCarrinho() {
        this.calcularTotal();
        this.atualizarInterface();
    }

    atualizarInterface() {
        const listaCarrinho = document.getElementById('lista-carrinho');
        const totalCarrinho = document.getElementById('total-carrinho');
        const contadorCarrinho = document.getElementById('contador-carrinho');

        // Atualizar contador
        const totalItens = this.itens.reduce((acc, item) => acc + item.quantidade, 0);
        contadorCarrinho.textContent = totalItens;

        // Atualizar lista
        if (this.itens.length === 0) {
            listaCarrinho.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
        } else {
            listaCarrinho.innerHTML = this.itens.map(item => `
                <div class="item-carrinho">
                    <div class="item-info">
                        <div class="item-nome">${item.produto}</div>
                        <div class="item-preco">R$ ${item.preco.toFixed(2)}</div>
                    </div>
                    <div class="controles-quantidade">
                        <button class="btn-quantidade" onclick="carrinho.alterarQuantidade('${item.produto}', ${item.quantidade - 1})">-</button>
                        <span>${item.quantidade}</span>
                        <button class="btn-quantidade" onclick="carrinho.alterarQuantidade('${item.produto}', ${item.quantidade + 1})">+</button>
                        <button class="btn-remover" onclick="carrinho.removerItem('${item.produto}')">Remover</button>
                    </div>
                </div>
            `).join('');
        }

        // Atualizar total
        totalCarrinho.textContent = this.total.toFixed(2);
    }

    salvarCarrinho() {
        localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }

    carregarCarrinho() {
        const carrinhoSalvo = localStorage.getItem('carrinho');
        if (carrinhoSalvo) {
            this.itens = JSON.parse(carrinhoSalvo);
        }
    }

    finalizarPedido() {
        if (this.itens.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }

        const confirmacao = confirm(`Total do pedido: R$ ${this.total.toFixed(2)}\nDeseja finalizar o pedido?`);
        
        if (confirmacao) {
            alert('Pedido realizado com sucesso! Obrigado pela compra!');
            this.itens = [];
            this.salvarCarrinho();
            this.atualizarCarrinho();
        }
    }

    mostrarMensagem(mensagem) {
        // Criar elemento de mensagem
        const mensagemEl = document.createElement('div');
        mensagemEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        mensagemEl.textContent = mensagem;
        
        document.body.appendChild(mensagemEl);
        
        // Remover após 3 segundos
        setTimeout(() => {
            mensagemEl.remove();
        }, 3000);
    }
}

// Inicializar carrinho
const carrinho = new Carrinho();

// Adicionar event listeners quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    // Botões de adicionar ao carrinho
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            const produto = this.getAttribute('data-produto');
            const preco = this.getAttribute('data-preco');
            carrinho.adicionarItem(produto, preco);
        });
    });

    // Botão finalizar pedido
    document.getElementById('finalizar-pedido').addEventListener('click', function() {
        carrinho.finalizarPedido();
    });

    // Smooth scroll para navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Adicionar animação CSS para as mensagens
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);