/**
 * ===================================================
 * 1. SIMULAÇÃO DE FUNCIONALIDADE DE CARRINHO
 * ===================================================
 */

// Variável para rastrear o número de itens no carrinho
let contagemCarrinho = 0;

// Seleciona o elemento que exibe a contagem no cabeçalho
const carrinhoContador = document.querySelector('#top-bar a[href="carrinho.html"]');

// Função para manipular o clique no botão "Adicionar ao Carrinho"
function adicionarAoCarrinho(event) {
    // Verifica se o elemento clicado é um botão com a classe 'btn-adicionar'
    if (event.target.classList.contains('btn-adicionar')) {
        
        // Simula a adição do item
        contagemCarrinho++;
        
        // Atualiza o texto do contador no cabeçalho
        if (carrinhoContador) {
             carrinhoContador.textContent = `🛒 Carrinho (${contagemCarrinho})`;
        }
        
        // Opcional: Alerta para feedback visual
        const nomeProduto = event.target.closest('.produto').querySelector('h3').textContent;
        alert(`${nomeProduto} adicionado(a) ao seu carrinho! Total: ${contagemCarrinho} itens.`);
    }
}

// Adiciona um "listener" para o clique em toda a área principal da loja
// Isso permite capturar cliques em qualquer botão de adição
document.addEventListener('click', adicionarAoCarrinho);


/**
 * ===================================================
 * 2. FUNCIONALIDADE BÁSICA DO CARROSSEL DE DESTAQUES
 * (Estrutura para slides simples, não é animação completa)
 * ===================================================
 */

const carrosselContainer = document.getElementById('carousel-destaques');

if (carrosselContainer) {
    
    // Simula a adição de múltiplos slides (que viriam de um servidor, por exemplo)
    const slides = [
        { 
            titulo: "Lançamento: Máscara Facial com Vitamina C!", 
            texto: "Ilumine sua pele com o poder antioxidante.", 
            link: "lancamento-vitc.html" 
        },
        { 
            titulo: "FRETE GRÁTIS neste mês!", 
            texto: "Aproveite para renovar seu estoque de beleza.", 
            link: "promocoes.html" 
        }
    ];

    // Variável de controle do slide atual
    let slideAtual = 0;

    // Função para mostrar o slide atual
    function mostrarSlide() {
        
        // Remove conteúdo existente (o slide estático do HTML)
        carrosselContainer.innerHTML = ''; 

        // Cria o novo elemento de slide
        const slide = slides[slideAtual];
        
        // Cria o HTML do slide dinamicamente
        carrosselContainer.innerHTML = `
            <div class="slide">
                <h2>${slide.titulo}</h2>
                <p>${slide.texto}</p>
                <a href="${slide.link}" class="btn-cta">Confira</a>
            </div>
        `;
    }

    // Função para avançar para o próximo slide
    function proximoSlide() {
        slideAtual = (slideAtual + 1) % slides.length;
        mostrarSlide();
    }

    // Define o intervalo para a troca automática de slides (a cada 5 segundos)
    setInterval(proximoSlide, 5000); 

    // Chama a função pela primeira vez para iniciar
    mostrarSlide();
}


/**
 * ===================================================
 * 3. FUNCIONALIDADE DE SUBMENU (Dropdown)
 * ===================================================
 */

// Seleciona todos os itens que são dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    // Adiciona evento de clique para telas que não suportam hover (como tablets/celulares)
    dropdown.addEventListener('click', function(event) {
        
        // Impede que o clique no link principal navegue
        event.preventDefault(); 
        
        // Alterna a classe 'active' para mostrar/esconder o submenu
        this.querySelector('.submenu').classList.toggle('active');
    });
});