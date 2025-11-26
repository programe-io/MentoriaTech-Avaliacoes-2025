// Função principal para carregar e exibir os dados
function carregarDadosNatalidade() {
    // Simulação de Dados
    // Em um cenário real, estes dados viriam de uma API (por exemplo, fetch('url_da_api')).
    const dadosNatalidade = {
        taxaFecundidadeAfro: 2.14, // Exemplo de taxa de fecundidade
        dataAtualizacao: '2025-11-26'
    };

    // 1. Encontra o elemento HTML onde o valor será exibido
    const elementoTaxa = document.getElementById('taxa-atual');

    // 2. Verifica se o elemento existe antes de tentar atualizá-lo
    if (elementoTaxa) {
        // Obtém o valor simulado
        const taxa = dadosNatalidade.taxaFecundidadeAfro;

        // Formata o número para duas casas decimais
        // O método toLocaleString pode ser usado para garantir a vírgula como separador decimal no Brasil
        const taxaFormatada = taxa.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        // 3. Atualiza o conteúdo do elemento
        elementoTaxa.textContent = taxaFormatada;

        // Opcional: Atualiza a data da nota
        const notaDados = document.querySelector('.nota-dados');
        if (notaDados) {
            notaDados.textContent += ` (Última atualização: ${dadosNatalidade.dataAtualizacao})`;
        }

        console.log(`Dados carregados com sucesso: ${taxaFormatada} filhos por mulher.`);
    } else {
        console.error("Erro: Elemento com ID 'taxa-atual' não encontrado no HTML.");
    }
}

// Chama a função para iniciar o carregamento dos dados quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', carregarDadosNatalidade);