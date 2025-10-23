/* ========================================================= */
/* JAVASCRIPT DA RH STORE - V3                    */
/* Funcionalidades: Carrinho e Exibição de Produtos Dinâmica */
/* ========================================================= */

// 1. DADOS DE PRODUTOS SIMULADOS (com caminhos de imagem locais)
const produtosRHStore = [
    { 
        id: 1, 
        nome: "Moletom Premium RH", 
        preco: 799.99, 
        cor: "Azul Vívido", 
        img: "https://134company.com.br/cdn/shop/files/10_776af0c9-733b-4ca8-99bc-9739d88d0bc8_1024x.png?v=1744824206" // Você deve criar esta pasta e colocar as imagens
    },
    { 
        id: 2, 
        nome: "Camiseta Longline Preta", 
        preco: 99.90, 
        cor: "Preto Minimalista", 
        img: "https://cdn.awsli.com.br/600x450/2462/2462934/produto/236071300/07-preto-sqvitmefxr.jpg"
    },
    { 
        id: 3, 
        nome: "Boné RH Style Preto", 
        preco: 79.90, 
        cor: "Preto", 
        img: "https://m.magazineluiza.com.br/a-static/420x420/bone-5-five-panel-preto-aba-reta-redinha-lateral-style-young/youngcommercez2/a83-preto/3d3f23c19e58e9211865512abb649c5f.jpeg" // Link externo
    },
    { 
        id: 4, 
        nome: "Jaqueta Corta-Vento", 
        preco: 349.90, 
        cor: "Azul", 
        img: "imagens/jaqueta_corta_vento.jpg" 
    },
];

let carrinho = []; 

// 2. FUNÇÃO PARA ATUALIZAR O CONTADOR DO CARRINHO
function atualizarContagemCarrinho() {
    const bagIcon = document.querySelector('.bag-icon');
    const totalItens = carrinho.length; 

    let contador = document.querySelector('.cart-counter');
    if (!contador) {
        contador = document.createElement('span');
        contador.classList.add('cart-counter');
        bagIcon.parentNode.appendChild(contador); 
    }

    if (totalItens > 0) {
        contador.textContent = totalItens;
        contador.style.display = 'flex'; 
    } else {
        contador.style.display = 'none'; 
    }
}

// 3. FUNÇÃO DE ADICIONAR AO CARRINHO
function adicionarAoCarrinho(produtoId) {
    const produto = produtosRHStore.find(p => p.id === produtoId);
    
    if (produto) {
        carrinho.push(produto); 
        atualizarContagemCarrinho(); 
        console.log(`Produto adicionado: ${produto.nome}.`);
        
        // Feedback visual mais discreto
        const feedback = document.createElement('div');
        feedback.textContent = `✅ ${produto.nome} adicionado!`;
        feedback.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background: var(--color-blue); color: var(--color-black); padding: 10px 20px; border-radius: 4px; z-index: 9999; opacity: 0; transition: opacity 0.5s; font-weight: 700;';
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            feedback.style.opacity = 0;
            feedback.addEventListener('transitionend', () => feedback.remove());
        }, 3000);
    }
}

// 4. FUNÇÃO PARA RENDERIZAR PRODUTOS NA PÁGINA
function renderizarProdutos() {
    const wrapper = document.querySelector('.product-wrapper');
    if (!wrapper) return; 
    
    wrapper.innerHTML = ''; 

    // Limita a 3 produtos na seção de destaque, se houver mais
    const produtosParaExibir = produtosRHStore.slice(0, 3); 

    produtosParaExibir.forEach((produto, index) => {
        // O primeiro produto (index 0) recebe o destaque azul
        const isPrimaryFocus = index === 0 ? 'primary-focus' : ''; 
        
        const produtoHTML = `
            <div class="product-card-v3 ${isPrimaryFocus}">
                <img src="${produto.img}" alt="${produto.nome}">
                <div class="product-info-v3">
                    <h4>${produto.nome}</h4>
                    <p class="price-v3">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <button class="btn-add-v3" data-product-id="${produto.id}">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;
        wrapper.innerHTML += produtoHTML;
    });

    // Adiciona evento de clique aos botões gerados
    document.querySelectorAll('.btn-add-v3').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.productId);
            adicionarAoCarrinho(id);
        });
    });
}

// 5. FUNÇÃO PARA O MENU MOBILE TOGGLE
function configurarMenuMobile() {
    const header = document.querySelector('.header-grid');
    const nav = document.querySelector('.nav-v3');
    
    // Cria o ícone de menu (Hambúrguer)
    const menuToggleIcon = document.createElement('i'); 
    menuToggleIcon.classList.add('fas', 'fa-bars', 'menu-toggle-icon');
    
    // Encontra o container dos ícones e insere o toggle para o mobile
    const iconsContainer = document.querySelector('.icons-v3');
    if (iconsContainer) {
        iconsContainer.insertBefore(menuToggleIcon, iconsContainer.firstChild);
    }
    
    // Alterna a classe 'active' que mostra/esconde o menu
    menuToggleIcon.addEventListener('click', () => {
        nav.classList.toggle('active'); 
    });
}

// 6. INICIALIZAÇÃO DO SITE
document.addEventListener('DOMContentLoaded', () => {
    // 6.1. Renderiza os produtos
    renderizarProdutos();
    
    // 6.2. Configura a funcionalidade do menu mobile
    configurarMenuMobile(); 
    
    // 6.3. Inicializa a contagem do carrinho
    atualizarContagemCarrinho(); 
});