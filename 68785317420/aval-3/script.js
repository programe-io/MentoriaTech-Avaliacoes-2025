// Array de Dicas de Rastreio
const dicasRastreio = [
    "Sempre caminhe contra o vento para que seu cheiro não espante a vida selvagem.",
    "A poça de água mais escura na pegada é a pista mais antiga. Olhe para a borda.",
    "O musgo nas árvores geralmente cresce mais no lado Norte, uma bússola natural.",
    "Olhe para as **sombras** dos objetos e não diretamente para eles para detectar movimento sutil.",
    "Rastros úmidos e escuros em pedras indicam que a marca é muito recente.",
    "Ao encontrar um rastro, pare, olhe em volta e 'leia' o próximo passo provável do alvo."
];

// 1. Função para exibir Dica Aleatória
function exibirDica() {
    const indice = Math.floor(Math.random() * dicasRastreio.length);
    const elementoDica = document.getElementById('dica-do-dia');
    
    if (elementoDica) {
        // Usa innerHTML para permitir o negrito (**) na dica
        elementoDica.innerHTML = dicasRastreio[indice];
    }
}

// 2. Demonstração Interativa de Ferramentas
function configurarFerramentas() {
    // Seleciona todos os botões de ferramenta
    const botoes = document.querySelectorAll('.botao-ferramenta');
    const imagemPrincipal = document.getElementById('ferramenta-atual');

    if (botoes.length > 0 && imagemPrincipal) {
        
        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                const novaSrc = botao.getAttribute('data-img-src');
                const descricao = botao.getAttribute('data-descricao');
                
                // 1. Troca a imagem com um pequeno fade
                imagemPrincipal.style.opacity = 0.3;
                setTimeout(() => {
                    imagemPrincipal.src = novaSrc;
                    imagemPrincipal.alt = descricao;
                    imagemPrincipal.style.opacity = 1;
                }, 300); // 300ms de atraso
                
                // 2. Remove o destaque dos outros e destaca o atual
                botoes.forEach(b => b.style.backgroundColor = 'var(--cor-verde-claro)');
                botao.style.backgroundColor = 'var(--cor-marrom-terra)'; // Novo destaque
            });
        });
        
        // Configura o estado inicial (primeiro botão)
        if (botoes[0]) {
            botoes[0].style.backgroundColor = 'var(--cor-marrom-terra)';
        }
    }
}

// 3. Configurar evento de clique no botão de Nova Dica
function configurarBotoes() {
    const btnNovaDica = document.getElementById('btn-nova-dica');
    if (btnNovaDica) {
        btnNovaDica.addEventListener('click', exibirDica);
    }
}


// Executa as funções quando a página estiver totalmente carregada
window.onload = function() {
    exibirDica();
    configurarFerramentas();
    configurarBotoes();
};