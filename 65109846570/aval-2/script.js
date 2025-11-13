/* VARIÁVEL GLOBAL */
// Define o número de porções base para o cálculo
const PORCOES_BASE = 12;

/* FUNÇÃO 1: AJUSTAR INGREDIENTES */

/**
 * Recalcula a quantidade de cada ingrediente com base no novo número de porções.
 */
function ajustarIngredientes() {
    // 1. Pega o valor atual do input de porções
    const novoNumPorcoes = document.getElementById('porcoes').value;

    // 2. Calcula o fator de ajuste (multiplicador)
    // Ex: Se o usuário quer 6 porções (metade), o fator é 0.5 (6/12)
    const fatorAjuste = novoNumPorcoes / PORCOES_BASE;

    // 3. Seleciona todas as linhas de ingredientes no corpo da tabela (tbody)
    const linhasIngredientes = document.querySelector('#tabela-ingredientes tbody').children;

    // 4. Itera sobre cada linha da tabela
    for (let i = 0; i < linhasIngredientes.length; i++) {
        const linha = linhasIngredientes[i];
        
        // Pega a quantidade base do atributo 'data-base'
        // parseFloat é usado para garantir que o valor seja um número (ex: 2.5)
        const quantidadeBase = parseFloat(linha.getAttribute('data-base'));
        
        // Calcula a nova quantidade: Base * Fator
        let novaQuantidade = quantidadeBase * fatorAjuste;
        
        // Opcional: Arredondar ou formatar para não ter números longos demais
        // Se a quantidade for um número inteiro, mostra inteiro. Se não, mostra 2 casas decimais.
        if (Number.isInteger(novaQuantidade)) {
             // Mantém o valor como inteiro
        } else {
             novaQuantidade = novaQuantidade.toFixed(2); // Arredonda para 2 casas decimais
        }
        
        // Encontra o elemento <td> que exibe a quantidade (o segundo <td> da linha)
        // e atualiza seu conteúdo
        linha.querySelector('.quantidade').textContent = novaQuantidade;
    }

    console.log(`Ingredientes ajustados para ${novoNumPorcoes} porções.`);
}


/* FUNÇÃO 2: MARCAR PASSO CONCLUÍDO */

/**
 * Altera o estilo de um item da lista de preparo para indicar que foi concluído.
 * @param {HTMLElement} passo O elemento <li> que foi clicado.
 */
function marcarPasso(passo) {
    // Verifica se o passo JÁ tem a classe 'concluido'
    const jaConcluido = passo.classList.contains('concluido');

    if (jaConcluido) {
        // Se já está marcado, remove a classe (desmarcar)
        passo.classList.remove('concluido');
        console.log(`Passo desmarcado: ${passo.textContent}`);
    } else {
        // Se não está marcado, adiciona a classe (marcar)
        passo.classList.add('concluido');
        console.log(`Passo concluído: ${passo.textContent}`);
    }
}

// Opcional: Chamada inicial para garantir que a tabela seja carregada corretamente (embora o HTML já tenha o valor inicial)
document.addEventListener('DOMContentLoaded', ajustarIngredientes);