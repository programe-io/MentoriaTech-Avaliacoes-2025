// Arquivo: script.js

// 1. Função para executar quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', () => {
    // Exibe um alerta de boas-vindas ao visitante
    alert("Bem-vindo(a)! Prepare-se para o seu melhor Bolo de Chocolate! 🎂");

    // Adiciona o listener para riscar ingredientes
    setupIngredientTogglers();

    // Adiciona o listener para calcular o tempo
    setupTimeCalculator();
});


// 2. Adiciona funcionalidade de clicar para riscar ingredientes
function setupIngredientTogglers() {
    const ingredientLists = document.querySelectorAll('ul'); // Seleciona todas as listas não ordenadas

    ingredientLists.forEach(ul => {
        const items = ul.querySelectorAll('li'); // Pega os itens da lista
        items.forEach(item => {
            item.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável

            item.addEventListener('click', function() {
                // Alterna a classe 'checked' para riscar o item
                this.classList.toggle('checked');

                // Exibe uma mensagem no console para fins de debug
                if (this.classList.contains('checked')) {
                    console.log(`Ingrediente marcado: ${this.textContent.trim()}`);
                } else {
                    console.log(`Ingrediente desmarcado: ${this.textContent.trim()}`);
                }
            });
        });
    });
}

// 3. Adiciona funcionalidade de calcular o tempo total da receita
function setupTimeCalculator() {
    const container = document.querySelector('.container');
    
    // Cria o botão de cálculo
    const timeButton = document.createElement('button');
    timeButton.textContent = "⏱️ Calcular Tempo Total da Receita";
    timeButton.id = "calculateTime";
    timeButton.style.marginTop = '20px';
    timeButton.style.padding = '10px 15px';
    timeButton.style.backgroundColor = '#6d4c41'; // Cor de chocolate
    timeButton.style.color = 'white';
    timeButton.style.border = 'none';
    timeButton.style.borderRadius = '5px';
    timeButton.style.cursor = 'pointer';
    timeButton.style.display = 'block';
    timeButton.style.margin = '20px auto';
    
    // Adiciona o botão ao container principal
    container.appendChild(timeButton);
    
    timeButton.addEventListener('click', () => {
        // Estimativas de tempo em minutos
        const preparoMassa = 15; // Preparar e misturar ingredientes
        const forno = 35;       // Assar
        const preparoBrigadeiro = 10; // Fazer a cobertura
        const resfriamento = 60; // Tempo MÍNIMO de resfriamento antes de cobrir

        const tempoTotal = preparoMassa + forno + preparoBrigadeiro + resfriamento;
        
        alert(`Tempo Total Estimado:\n- Preparo: ${preparoMassa} min\n- Assar: ${forno} min\n- Cobertura: ${preparoBrigadeiro} min\n- Resfriamento (min.): ${resfriamento} min\n\nTotal Aproximado: ${tempoTotal} minutos (Cerca de 2 horas)`);
    });
}