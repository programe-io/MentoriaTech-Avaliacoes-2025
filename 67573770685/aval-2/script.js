/**
 * Script.js - Arquivo JavaScript com funcionalidades comuns para websites
 * Sem erros de sintaxe
 */

// ==================== VARIÁVEIS GLOBAIS ====================

const APP_NAME = 'Meu Site';
const APP_VERSION = '1.0.0';
let usuarioLogado = false;
let usuarioAtual = null;

// ==================== FUNÇÕES UTILITÁRIAS ====================

/**
 * Função para exibir mensagens de log no console
 * @param {string} mensagem - A mensagem a ser exibida
 * @param {string} tipo - O tipo de log (log, warn, error, info)
 */
function exibirLog(mensagem, tipo = 'log') {
    const timestamp = new Date().toLocaleTimeString();
    console[tipo](`[${timestamp}] ${mensagem}`);
}

/**
 * Função para validar email
 * @param {string} email - O email a ser validado
 * @returns {boolean} - Retorna true se o email é válido
 */
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

/**
 * Função para validar senha
 * @param {string} senha - A senha a ser validada
 * @returns {boolean} - Retorna true se a senha atende aos critérios
 */
function validarSenha(senha) {
    return senha.length >= 8;
}

/**
 * Função para formatar data
 * @param {Date} data - A data a ser formatada
 * @returns {string} - Data formatada em DD/MM/YYYY
 */
function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

/**
 * Função para capitalizar primeira letra de uma string
 * @param {string} texto - O texto a ser capitalizado
 * @returns {string} - Texto com primeira letra maiúscula
 */
function capitalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Função para gerar número aleatório
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {number} - Número aleatório entre min e max
 */
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Função para fazer requisição AJAX
 * @param {string} url - URL da requisição
 * @param {string} metodo - Método HTTP (GET, POST, etc)
 * @param {object} dados - Dados a serem enviados
 * @returns {Promise} - Promise com a resposta
 */
async function fazerRequisicao(url, metodo = 'GET', dados = null) {
    try {
        const opcoes = {
            method: metodo,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (dados && metodo !== 'GET') {
            opcoes.body = JSON.stringify(dados);
        }

        const resposta = await fetch(url, opcoes);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const resultado = await resposta.json();
        return resultado;
    } catch (erro) {
        exibirLog(`Erro na requisição: ${erro.message}`, 'error');
        throw erro;
    }
}

// ==================== FUNÇÕES DE MANIPULAÇÃO DO DOM ====================

/**
 * Função para obter elemento por ID
 * @param {string} id - ID do elemento
 * @returns {Element} - O elemento encontrado
 */
function obterElementoPorId(id) {
    return document.getElementById(id);
}

/**
 * Função para obter elementos por classe
 * @param {string} classe - Nome da classe
 * @returns {NodeList} - Lista de elementos encontrados
 */
function obterElementosPorClasse(classe) {
    return document.querySelectorAll(`.${classe}`);
}

/**
 * Função para adicionar classe a um elemento
 * @param {Element} elemento - O elemento
 * @param {string} classe - Nome da classe
 */
function adicionarClasse(elemento, classe) {
    if (elemento) {
        elemento.classList.add(classe);
    }
}

/**
 * Função para remover classe de um elemento
 * @param {Element} elemento - O elemento
 * @param {string} classe - Nome da classe
 */
function removerClasse(elemento, classe) {
    if (elemento) {
        elemento.classList.remove(classe);
    }
}

/**
 * Função para alternar classe de um elemento
 * @param {Element} elemento - O elemento
 * @param {string} classe - Nome da classe
 */
function alternarClasse(elemento, classe) {
    if (elemento) {
        elemento.classList.toggle(classe);
    }
}

/**
 * Função para definir conteúdo HTML de um elemento
 * @param {Element} elemento - O elemento
 * @param {string} html - Conteúdo HTML
 */
function definirHTML(elemento, html) {
    if (elemento) {
        elemento.innerHTML = html;
    }
}

/**
 * Função para obter valor de um input
 * @param {string} id - ID do input
 * @returns {string} - Valor do input
 */
function obterValorInput(id) {
    const elemento = obterElementoPorId(id);
    return elemento ? elemento.value : '';
}

/**
 * Função para definir valor de um input
 * @param {string} id - ID do input
 * @param {string} valor - Novo valor
 */
function definirValorInput(id, valor) {
    const elemento = obterElementoPorId(id);
    if (elemento) {
        elemento.value = valor;
    }
}

/**
 * Função para mostrar elemento
 * @param {Element} elemento - O elemento
 */
function mostrarElemento(elemento) {
    if (elemento) {
        elemento.style.display = 'block';
    }
}

/**
 * Função para ocultar elemento
 * @param {Element} elemento - O elemento
 */
function ocultarElemento(elemento) {
    if (elemento) {
        elemento.style.display = 'none';
    }
}

// ==================== FUNÇÕES DE AUTENTICAÇÃO ====================

/**
 * Função para fazer login
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 * @returns {boolean} - Retorna true se login foi bem-sucedido
 */
function fazerLogin(email, senha) {
    if (!validarEmail(email)) {
        exibirLog('Email inválido', 'warn');
        return false;
    }

    if (!validarSenha(senha)) {
        exibirLog('Senha deve ter no mínimo 8 caracteres', 'warn');
        return false;
    }

    usuarioLogado = true;
    usuarioAtual = {
        email: email,
        dataLogin: new Date(),
        id: gerarNumeroAleatorio(1000, 9999)
    };

    exibirLog(`Usuário ${email} logado com sucesso`, 'info');
    return true;
}

/**
 * Função para fazer logout
 */
function fazerLogout() {
    if (usuarioLogado) {
        exibirLog(`Usuário ${usuarioAtual.email} deslogado`, 'info');
        usuarioLogado = false;
        usuarioAtual = null;
    }
}

/**
 * Função para verificar se usuário está logado
 * @returns {boolean} - Retorna true se usuário está logado
 */
function estaLogado() {
    return usuarioLogado;
}

// ==================== FUNÇÕES DE ARMAZENAMENTO LOCAL ====================

/**
 * Função para salvar dados no localStorage
 * @param {string} chave - Chave para armazenar
 * @param {any} valor - Valor a armazenar
 */
function salvarNoLocal(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
        exibirLog(`Dados salvos: ${chave}`, 'log');
    } catch (erro) {
        exibirLog(`Erro ao salvar dados: ${erro.message}`, 'error');
    }
}

/**
 * Função para obter dados do localStorage
 * @param {string} chave - Chave para recuperar
 * @returns {any} - Valor armazenado ou null
 */
function obterDoLocal(chave) {
    try {
        const valor = localStorage.getItem(chave);
        return valor ? JSON.parse(valor) : null;
    } catch (erro) {
        exibirLog(`Erro ao obter dados: ${erro.message}`, 'error');
        return null;
    }
}

/**
 * Função para remover dados do localStorage
 * @param {string} chave - Chave para remover
 */
function removerDoLocal(chave) {
    try {
        localStorage.removeItem(chave);
        exibirLog(`Dados removidos: ${chave}`, 'log');
    } catch (erro) {
        exibirLog(`Erro ao remover dados: ${erro.message}`, 'error');
    }
}

/**
 * Função para limpar todo o localStorage
 */
function limparLocal() {
    try {
        localStorage.clear();
        exibirLog('LocalStorage limpo', 'log');
    } catch (erro) {
        exibirLog(`Erro ao limpar localStorage: ${erro.message}`, 'error');
    }
}

// ==================== FUNÇÕES DE MANIPULAÇÃO DE ARRAYS ====================

/**
 * Função para filtrar array
 * @param {Array} array - Array a filtrar
 * @param {Function} condicao - Função de condição
 * @returns {Array} - Array filtrado
 */
function filtrarArray(array, condicao) {
    return array.filter(condicao);
}

/**
 * Função para mapear array
 * @param {Array} array - Array a mapear
 * @param {Function} transformacao - Função de transformação
 * @returns {Array} - Array transformado
 */
function mapearArray(array, transformacao) {
    return array.map(transformacao);
}

/**
 * Função para encontrar elemento em array
 * @param {Array} array - Array a procurar
 * @param {Function} condicao - Função de condição
 * @returns {any} - Elemento encontrado ou undefined
 */
function encontrarEmArray(array, condicao) {
    return array.find(condicao);
}

/**
 * Função para ordenar array
 * @param {Array} array - Array a ordenar
 * @param {string} propriedade - Propriedade para ordenar
 * @param {string} direcao - 'asc' para ascendente, 'desc' para descendente
 * @returns {Array} - Array ordenado
 */
function ordenarArray(array, propriedade, direcao = 'asc') {
    const copia = [...array];
    copia.sort((a, b) => {
        if (direcao === 'asc') {
            return a[propriedade] > b[propriedade] ? 1 : -1;
        } else {
            return a[propriedade] < b[propriedade] ? 1 : -1;
        }
    });
    return copia;
}

// ==================== FUNÇÕES DE MANIPULAÇÃO DE OBJETOS ====================

/**
 * Função para mesclar objetos
 * @param {Object} obj1 - Primeiro objeto
 * @param {Object} obj2 - Segundo objeto
 * @returns {Object} - Objeto mesclado
 */
function mesclarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

/**
 * Função para clonar objeto
 * @param {Object} objeto - Objeto a clonar
 * @returns {Object} - Cópia do objeto
 */
function clonarObjeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

/**
 * Função para obter chaves de um objeto
 * @param {Object} objeto - O objeto
 * @returns {Array} - Array com as chaves
 */
function obterChaves(objeto) {
    return Object.keys(objeto);
}

/**
 * Função para obter valores de um objeto
 * @param {Object} objeto - O objeto
 * @returns {Array} - Array com os valores
 */
function obterValores(objeto) {
    return Object.values(objeto);
}

// ==================== FUNÇÕES DE EVENTOS ====================

/**
 * Função para adicionar evento a um elemento
 * @param {Element} elemento - O elemento
 * @param {string} evento - Nome do evento
 * @param {Function} callback - Função a executar
 */
function adicionarEvento(elemento, evento, callback) {
    if (elemento) {
        elemento.addEventListener(evento, callback);
    }
}

/**
 * Função para remover evento de um elemento
 * @param {Element} elemento - O elemento
 * @param {string} evento - Nome do evento
 * @param {Function} callback - Função a remover
 */
function removerEvento(elemento, evento, callback) {
    if (elemento) {
        elemento.removeEventListener(evento, callback);
    }
}

/**
 * Função para disparar evento customizado
 * @param {string} nomeEvento - Nome do evento
 * @param {any} detalhe - Detalhe do evento
 */
function dispararEvento(nomeEvento, detalhe = null) {
    const evento = new CustomEvent(nomeEvento, { detail: detalhe });
    document.dispatchEvent(evento);
}

// ==================== FUNÇÕES DE ANIMAÇÃO ====================

/**
 * Função para animar scroll suave
 * @param {Element} elemento - Elemento para scroll
 * @param {string} posicao - 'top', 'bottom', 'center'
 */
function scrollSuave(elemento, posicao = 'top') {
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: posicao
        });
    }
}

/**
 * Função para adicionar efeito fade in
 * @param {Element} elemento - O elemento
 * @param {number} duracao - Duração em ms
 */
function fadeIn(elemento, duracao = 300) {
    if (elemento) {
        elemento.style.opacity = '0';
        elemento.style.transition = `opacity ${duracao}ms`;
        setTimeout(() => {
            elemento.style.opacity = '1';
        }, 10);
    }
}

/**
 * Função para adicionar efeito fade out
 * @param {Element} elemento - O elemento
 * @param {number} duracao - Duração em ms
 */
function fadeOut(elemento, duracao = 300) {
    if (elemento) {
        elemento.style.transition = `opacity ${duracao}ms`;
        elemento.style.opacity = '0';
    }
}

// ==================== INICIALIZAÇÃO ====================

/**
 * Função para inicializar a aplicação
 */
function inicializarApp() {
    exibirLog(`${APP_NAME} v${APP_VERSION} iniciado`, 'info');

    // Adicionar listeners de eventos globais
    document.addEventListener('DOMContentLoaded', () => {
        exibirLog('DOM completamente carregado', 'info');
    });

    // Adicionar listener para antes de descarregar a página
    window.addEventListener('beforeunload', () => {
        if (usuarioLogado) {
            fazerLogout();
        }
    });

    exibirLog('Aplicação pronta para uso', 'info');
}

// Inicializar aplicação quando o script for carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
    inicializarApp();
}

// ==================== EXPORTAR FUNÇÕES (para uso em módulos) ====================

// Descomente se estiver usando módulos ES6
/*
export {
    exibirLog,
    validarEmail,
    validarSenha,
    formatarData,
    capitalizarTexto,
    gerarNumeroAleatorio,
    fazerRequisicao,
    obterElementoPorId,
    obterElementosPorClasse,
    adicionarClasse,
    removerClasse,
    alternarClasse,
    definirHTML,
    obterValorInput,
    definirValorInput,
    mostrarElemento,
    ocultarElemento,
    fazerLogin,
    fazerLogout,
    estaLogado,
    salvarNoLocal,
    obterDoLocal,
    removerDoLocal,
    limparLocal,
    filtrarArray,
    mapearArray,
    encontrarEmArray,
    ordenarArray,
    mesclarObjetos,
    clonarObjeto,
    obterChaves,
    obterValores,
    adicionarEvento,
    removerEvento,
    dispararEvento,
    scrollSuave,
    fadeIn,
    fadeOut
};
*/

