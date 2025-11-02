// Espera o documento HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE 1: EXIBIR A DATA ATUAL ---

    // 1. Encontra o elemento no HTML onde queremos mostrar a data
    //    (Nós vamos adicionar este elemento no passo 3)
    const dataElement = document.getElementById('data-atual');

    // 2. Pega a data de hoje
    const hoje = new Date();

    // 3. Formata a data para o padrão pt-BR (ex: "terça-feira, 2 de novembro de 2025")
    const opcoesDeFormato = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let dataFormatada = hoje.toLocaleDateString('pt-BR', opcoesDeFormato);

    // 4. Coloca a primeira letra em maiúsculo (ex: "Terça-feira...")
    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    // 5. Insere a data formatada dentro do elemento no HTML
    if (dataElement) {
        dataElement.textContent = dataFormatada;
    }


    // --- FUNCIONALIDADE 2: LISTA DE TAREFAS INTERATIVA ---

    // 1. Seleciona TODAS as linhas (<tr>) dentro do corpo (<tbody>) da tabela de tarefas
    const linhasTarefa = document.querySelectorAll('#tarefas tbody tr');

    // 2. Adiciona um "ouvinte de clique" para CADA linha da tabela
    linhasTarefa.forEach(linha => {
        linha.addEventListener('click', () => {
            // 3. Quando uma linha é clicada, ele "alterna" a classe 'concluida'
            //    Se a classe não existe, ela é adicionada.
            //    Se ela já existe, ela é removida.
            linha.classList.toggle('concluida');
        });
    });

});