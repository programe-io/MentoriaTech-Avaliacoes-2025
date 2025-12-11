// Dados dos produtos para cálculo (devem bater com o HTML)
const produtosDB = [
    { id: 1, nome: "Mega Burger", preco: 35.90 },
    { id: 2, nome: "Pizza Calabresa", preco: 59.90 },
    { id: 3, nome: "Açaí Completo", preco: 22.50 },
    { id: 4, nome: "Refrigerante 2L", preco: 12.00 }
];

let carrinho = [];

// Elementos do DOM
const botoesAdicionar = document.querySelectorAll('.add-btn');
const contadorCarrinho = document.getElementById('contador-carrinho');
const carrinhoLista = document.getElementById('carrinho-lista');
const totalGeralElement = document.getElementById('total-geral');
const sidebar = document.getElementById('sidebar-carrinho');
const btnAbrirCarrinho = document.getElementById('carrinho-btn');
const btnFecharCarrinho = document.getElementById('fechar-carrinho-btn');
const btnFinalizar = document.getElementById('finalizar-pedido-btn');

// Função para adicionar ao carrinho
function adicionarItem(id) {
    const produto = produtosDB.find(p => p.id === id);
    const itemNoCarrinho = carrinho.find(item => item.id === id);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    atualizarCarrinho();
    abrirCarrinho();
}

// Função para remover do carrinho
function removerItem(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        if (carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        } else {
            carrinho.splice(index, 1);
        }
    }
    atualizarCarrinho();
}

// Atualizar visual do carrinho
function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    let totalItens = 0;

    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach(item => {
            total += item.preco * item.quantidade;
            totalItens += item.quantidade;

            const div = document.createElement('div');
            div.classList.add('carrinho-item');
            div.innerHTML = `
                <div>${item.quantidade}x ${item.nome}</div>
                <div>
                    R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
                    <span class="remove-btn" onclick="removerItem(${item.id})">❌</span>
                </div>
            `;
            carrinhoLista.appendChild(div);
        });
    }

    totalGeralElement.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    contadorCarrinho.innerText = totalItens;
}

// Abrir e Fechar Sidebar
function abrirCarrinho() { sidebar.classList.add('open'); }
function fecharCarrinho() { sidebar.classList.remove('open'); }

// Event Listeners
btnAbrirCarrinho.addEventListener('click', abrirCarrinho);
btnFecharCarrinho.addEventListener('click', fecharCarrinho);

// Adicionar evento de clique em todos os botões "Adicionar" do HTML
botoesAdicionar.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        adicionarItem(id);
    });
});

btnFinalizar.addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert("Pedido enviado para a Geovana! Obrigado!");
        carrinho = [];
        atualizarCarrinho();
        fecharCarrinho();
    } else {
        alert("Seu carrinho está vazio!");
    }
});