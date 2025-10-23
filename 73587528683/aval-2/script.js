// ====================================================================
// JAVASCRIPT: FUNCIONALIDADES
// ====================================================================

const listaJogosContainer = document.querySelector('.lista-jogos');
const formNovoJogo = document.getElementById('form-novo-jogo');
const body = document.body;
const themeToggleBtn = document.getElementById('toggle-theme-btn');

// --------------------------------------------------------------------
// 1. FUNCIONALIDADE DOS BOTÕES "ADICIONAR AO CARRINHO"
// --------------------------------------------------------------------

/**
 * Adiciona o listener de click ao botão de carrinho.
 * @param {HTMLElement} botao - O botão do carrinho.
 */
function configurarBotaoCarrinho(botao) {
    botao.addEventListener('click', function() {
        const card = this.closest('.jogo-card');
        const tituloJogo = card.querySelector('h3').textContent;
        alert(`"${tituloJogo}" foi adicionado ao seu carrinho!`);
    });
}

/**
 * Itera sobre os botões existentes na página e configura-os.
 */
function configurarBotoesExistentes() {
    // Seleciona todos os botões com a classe 'add-carrinho-btn'
    const botoesIniciais = document.querySelectorAll('.add-carrinho-btn');
    botoesIniciais.forEach(configurarBotaoCarrinho);
}

// --------------------------------------------------------------------
// 2. FUNCIONALIDADE "COLOCAR JOGO" (ADICIONAR NOVO JOGO)
// --------------------------------------------------------------------

/**
 * Cria o HTML para um novo card de jogo.
 */
function criarCardJogo(titulo, descricao, preco, fotoUrl) {
    // Formata o preço para o padrão brasileiro (ex: 99.00 -> 99,00)
    const precoFormatado = parseFloat(preco).toFixed(2).replace('.', ','); 
    
    return `
        <article class="jogo-card">
            <img src="${fotoUrl}" alt="${titulo}">
            <h3>${titulo}</h3>
            <p class="descricao">${descricao}</p>
            <p class="preco">R$ ${precoFormatado}</p>
            <button class="add-carrinho-btn">Adicionar ao Carrinho</button>
        </article>
    `;
}

/**
 * Adiciona um novo card de jogo à página e configura seu botão.
 */
function adicionarNovoJogo(titulo, descricao, preco, fotoUrl) {
    const novoCardHTML = criarCardJogo(titulo, descricao, preco, fotoUrl);
    
    // Insere o novo card ao final da lista de jogos
    listaJogosContainer.insertAdjacentHTML('beforeend', novoCardHTML);

    // Seleciona o botão do card recém-criado (o último adicionado)
    const novoBotao = listaJogosContainer.lastElementChild.querySelector('.add-carrinho-btn');
    
    // Configura o botão recém-criado para ser funcional
    configurarBotaoCarrinho(novoBotao);

    alert(`Jogo "${titulo}" adicionado ao catálogo com sucesso!`);
}

// Evento de submissão do formulário
formNovoJogo.addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Coleta os valores do formulário
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;
    const foto = document.getElementById('foto').value;
    
    // Chama a função de adicionar e configurar o novo jogo
    adicionarNovoJogo(titulo, descricao, preco, foto);

    // Limpa o formulário
    formNovoJogo.reset();
});


// --------------------------------------------------------------------
// 3. FUNCIONALIDADE DE ALTERNAR TEMA (DARK/LIGHT)
// --------------------------------------------------------------------

function enableLightTheme() {
    body.classList.add('light-theme');
    themeToggleBtn.textContent = 'Modo Dark';
}

function disableLightTheme() {
    body.classList.remove('light-theme');
    themeToggleBtn.textContent = 'Modo Light';
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        disableLightTheme();
    } else {
        enableLightTheme();
    }
});


// --------------------------------------------------------------------
// INICIALIZAÇÃO
// --------------------------------------------------------------------
// Garante que os botões dos jogos iniciais sejam funcionais assim que a página carregar
document.addEventListener('DOMContentLoaded', configurarBotoesExistentes);