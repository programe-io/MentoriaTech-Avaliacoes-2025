/**
 * Script JavaScript para buscar dados da Star Wars API (SWAPI)
 * e exibir o nome do primeiro planeta.
 */

function buscarDadosStarWars() {
    // URL da API para buscar a lista de planetas
    const urlPlanetas = 'https://swapi.dev/api/planets/';

    console.log('Iniciando busca por dados de Star Wars...');

    // Usa a função fetch() para fazer uma requisição HTTP
    fetch(urlPlanetas)
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (código 200-299)
            if (!response.ok) {
                // Lança um erro se a resposta não for OK
                throw new Error(`Erro de rede ou na API: ${response.status}`);
            }
            // Converte a resposta para o formato JSON
            return response.json();
        })
        .then(data => {
            // O objeto 'data' contém os resultados da API
            console.log('Dados recebidos com sucesso!');
            
            // A API retorna um array de planetas em 'data.results'
            const planetas = data.results;

            if (planetas && planetas.length > 0) {
                // Acessa o nome do primeiro planeta no array
                const nomePrimeiroPlaneta = planetas[0].name;
                
                // Exibe o nome no console
                console.log('---');
                console.log(`O primeiro planeta listado na SWAPI é: **${nomePrimeiroPlaneta}**`);
                console.log('---');
            } else {
                console.log('Nenhum planeta encontrado na resposta.');
            }
        })
        .catch(error => {
            // Captura e exibe qualquer erro que ocorra durante a busca
            console.error('Ocorreu um erro ao buscar dados da SWAPI:', error);
        });
}

// Chama a função para iniciar a busca
buscarDadosStarWars();