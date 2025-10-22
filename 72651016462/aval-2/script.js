document.addEventListener('DOMContentLoaded', () => {
    // ===============================================
    // 1. FUNCIONALIDADE CENTRAL: CARRINHO DE COMPRAS
    //    (Mantida e Aprimorada)
    // ===============================================

    let carrinho = [];
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalCarrinhoElement = document.getElementById('total-carrinho');
    const produtosContainer = document.querySelector('#produtos .container-produtos'); // Ajustado para a nova classe/ID

    function adicionarAoCarrinho(nome, preco) {
        const itemExistente = carrinho.find(item => item.nome === nome);
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({ nome, preco, quantidade: 1 });
        }
        
        atualizarVisualizacaoCarrinho();
    }

    function removerDoCarrinho(nome) {
        const itemIndex = carrinho.findIndex(item => item.nome === nome);
        if (itemIndex > -1) {
            const item = carrinho[itemIndex];
            if (item.quantidade > 1) {
                item.quantidade -= 1;
            } else {
                carrinho.splice(itemIndex, 1);
            }
        }
        atualizarVisualizacaoCarrinho();
    }

    function calcularTotal() {
        return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }

    function atualizarVisualizacaoCarrinho() {
        // Garantindo que os elementos existem antes de manipular
        if (!listaCarrinho || !totalCarrinhoElement) return;

        listaCarrinho.innerHTML = '';

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = '<li><i class="fas fa-box-open"></i> O seu carrinho está vazio.</li>';
        } else {
            carrinho.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.nome} (${item.quantidade}x)</span> 
                    <span class="preco-item">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                    <button class="remover-item" data-nome="${item.nome}"><i class="fas fa-minus-circle"></i></button>
                `;
                listaCarrinho.appendChild(li);
            });
        }
        
        const total = calcularTotal();
        totalCarrinhoElement.innerHTML = `<strong>Total:</strong> <span class="total-valor">R$ ${total.toFixed(2).replace('.', ',')}</span>`;

        // Re-adiciona listeners
        document.querySelectorAll('.remover-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const nomeProduto = e.currentTarget.getAttribute('data-nome');
                removerDoCarrinho(nomeProduto);
            });
        });
    }

    // Listener para o botão "Adicionar ao Carrinho"
    if (produtosContainer) {
        produtosContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.textContent.includes('Adicionar')) {
                const produtoDiv = e.target.closest('.produto');
                const nome = produtoDiv.querySelector('h3').textContent.trim();
                
                const precoTexto = produtoDiv.querySelector('strong').textContent
                                                .replace('R$', '')
                                                .trim()
                                                .replace(',', '.'); 
                
                const preco = parseFloat(precoTexto);

                if (!isNaN(preco)) {
                    adicionarAoCarrinho(nome, preco);
                    // Adiciona um efeito visual rápido de confirmação
                    e.target.classList.add('adicionado');
                    setTimeout(() => e.target.classList.remove('adicionado'), 500);
                }
            }
        });
    }

    // Inicialização do Carrinho
    atualizarVisualizacaoCarrinho();


    // ===============================================
    // 2. MELHORIA UX: ROLAGEM SUAVE (SMOOTH SCROLL)
    // ===============================================

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // A rolagem suave é o que deixa "bonito"
            });
        });
    });


    // ===============================================
    // 3. ANIMAÇÃO: SCROLL REVEAL (Torna o site dinâmico)
    // ===============================================
    
    // NOTA: Para este efeito funcionar, você deve adicionar um CSS básico.
    // Adicione isso ao seu styles.css:
    /*
    .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .scroll-reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
    */

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // O elemento é considerado visível quando 10% dele aparece
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Adiciona a classe de animação aos elementos que devem aparecer
    document.querySelectorAll('section, .produto').forEach(el => {
        // Se a seção for o cabeçalho, não animamos
        if (el.id !== 'inicio') {
            el.classList.add('scroll-reveal');
            observer.observe(el);
        }
    });

    // ===============================================
    // 4. DESTAQUE NO MENU (LINK ATIVO)
    // ===============================================

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        // Descobre qual seção está mais visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset para ajustar a visibilidade
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // Adiciona a classe 'active' ao link correspondente
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Inicia a função de destaque do menu
    window.dispatchEvent(new Event('scroll'));
});

// ===============================================
// CSS ESSENCIAL PARA AS ANIMAÇÕES (ADICIONAR AO styles.css)
// ===============================================

/*
.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

// Efeito no Link Ativo do Menu
nav a.active {
    background-color: #0056b3 !important; // Azul um pouco mais escuro
    border-bottom: 3px solid var(--amarelo-destaque);
}

// Efeito visual no botão após adicionar ao carrinho
button.adicionado {
    background-color: #28a745 !important; // Verde de sucesso
    color: white !important;
    transform: scale(1.05);
}
*/