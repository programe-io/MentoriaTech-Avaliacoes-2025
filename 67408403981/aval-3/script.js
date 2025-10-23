// =======================================================
// FUNÇÃO 1: EXIBIR A DATA ATUAL NO RODAPÉ
// =======================================================

/**
 * Encontra um elemento com a classe 'copyright-info' e insere o ano atual.
 * Se o elemento não for encontrado, ele não faz nada.
 */
function exibirAnoAtual() {
    // Cria uma nova instância da data
    const ano = new Date().getFullYear();
    
    // Busca o elemento de copyright no DOM
    const elementoCopyright = document.querySelector('footer > p small');
    
    if (elementoCopyright) {
        // Assume que o texto original é algo como "© 2025 Nome da Marca. Todos os direitos reservados."
        // Vamos apenas garantir que o ano atual esteja presente.
        elementoCopyright.innerHTML = `&copy; ${ano} Nome da Marca. Todos os direitos reservados.`;
    }
}


// =======================================================
// FUNÇÃO 2: INTERAÇÃO BÁSICA COM O BOTÃO PRINCIPAL (CTA)
// =======================================================

/**
 * Adiciona um evento de clique ao botão de "Ver Modelos".
 */
function configurarCTA() {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function(event) {
            // Previne a navegação imediata se for um link (para dar tempo do feedback)
            // No seu caso, o link já é para 'produtos.html', então podemos apenas dar um feedback visual.
            // event.preventDefault(); 
            
            console.log("Botão 'Ver Modelos' clicado!");
            alert("Aguarde! Redirecionando para a página de Produtos!");

            // Você pode adicionar classes CSS temporárias aqui para um efeito visual
            // ctaButton.classList.add('clicado');
        });
    }
}

// =======================================================
// FUNÇÃO 3: SIMULADOR DE VERIFICAÇÃO DE ESTOQUE (Exemplo em card de produto)
//
// O código HTML do produto tem o link de detalhes: <a href="produto/veloce-x.html">Detalhes</a>
// Vamos alterar isso para um botão de "Verificar Estoque" para fins de demonstração JS.
// =======================================================

/**
 * Simula uma verificação de estoque ao clicar no link/botão do produto.
 * IMPORTANTE: Isso pressupõe que os links 'Detalhes' serão usados como botões.
 */
function simularEstoque() {
    const botoesDetalhes = document.querySelectorAll('.produto a');

    botoesDetalhes.forEach(botao => {
        // Altera o texto do botão para ser mais descritivo para o exemplo JS
        botao.textContent = "Verificar Disponibilidade";
        
        // Remove a funcionalidade de link para o exemplo
        botao.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const produtoNome = this.closest('.produto').querySelector('h4').textContent;
            
            // Simulação de lógica de estoque
            const estaEmEstoque = Math.random() > 0.5; // 50% de chance de estar em estoque

            if (estaEmEstoque) {
                alert(`📦 Boa notícia! A ${produtoNome} está disponível em vários tamanhos. Compre agora!`);
                // Se estivesse em estoque, aqui você faria a navegação real ou abriria um modal
                // window.location.href = this.getAttribute('href'); 
            } else {
                alert(`⚠️ Desculpe, a ${produtoNome} está temporariamente esgotada. Cadastre-se para ser notificado!`);
                // Aqui você abriria um formulário de notificação, por exemplo.
            }
        });
    });
}


// =======================================================
// INICIALIZAÇÃO: Executa as funções quando a página é carregada
// =======================================================

// Adiciona um listener para garantir que o DOM (HTML) esteja totalmente carregado
// antes de tentar manipular seus elementos.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página da Marca de Chuteiras carregada com sucesso!");
    
    exibirAnoAtual();
    configurarCTA();
    simularEstoque();
});