// 1. Criar um botão "Alternar Tema" no HTML (se já não existir)
// Vamos adicionar este botão ao cabeçalho (HEADER) para que funcione.
// Se você não pode editar o HTML do cabeçalho, apenas ignore o passo 1.

// PASSO 1 (OPCIONAL/RECOMENDADO):
// Volte ao seu HTML e adicione um botão dentro do <header class="cabecalho-principal">:
/*
<header class="cabecalho-principal">
    <h1 class="logo">Meu Site</h1>
    <p class="slogan">Meu site muito top!</p>
    <button id="btn-tema">Alternar Tema</button>
</header>
*/

// 2. Adicionar o Código JavaScript

const body = document.body;
const botaoTema = document.getElementById('btn-tema');
const temaAtual = localStorage.getItem('tema');

// Função para aplicar o tema ao carregar a página
function aplicarTemaSalvo() {
    if (temaAtual === 'escuro') {
        body.classList.add('tema-escuro');
    }
}

// Função para alternar entre os temas
function alternarTema() {
    // Verifica se a classe 'tema-escuro' está presente
    if (body.classList.contains('tema-escuro')) {
        body.classList.remove('tema-escuro'); // Remove o tema escuro (volta para claro)
        localStorage.setItem('tema', 'claro');
    } else {
        body.classList.add('tema-escuro'); // Adiciona o tema escuro
        localStorage.setItem('tema', 'escuro');
    }
}

// 3. Adicionar um "Listener" ao botão
if (botaoTema) {
    botaoTema.addEventListener('click', alternarTema);
}

// 4. Aplica o tema salvo (se houver)
aplicarTemaSalvo();

console.log("JavaScript de alternância de tema carregado.");