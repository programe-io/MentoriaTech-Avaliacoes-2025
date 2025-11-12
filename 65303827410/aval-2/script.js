// Dica de boas-vindas ao carregar a página
window.onload = function() {
    alert("👋 Dica do Chef: Lembre-se de untar a forma antes de começar o Bolo de Cenoura!");
};

// Adiciona interatividade para marcar ingredientes
function adicionarInteratividadeIngredientes() {
    // Seleciona todos os itens da lista de ingredientes do bolo
    const ingredientesBolo = document.querySelectorAll('#destaque ul li');
    
    // Itera sobre cada item
    ingredientesBolo.forEach(item => {
        // Adiciona um 'ouvinte de evento' de clique para cada item
        item.addEventListener('click', function() {
            // Alterna a classe 'checked' (marcado) no item clicado
            this.classList.toggle('checked');
            
            // Muda o texto do alerta dependendo do estado
            if (this.classList.contains('checked')) {
                console.log(`${this.textContent} MARCADOS!`);
            } else {
                console.log(`${this.textContent} DESMARCADOS.`);
            }
        });
    });
}

// Chama a função para que ela seja executada
adicionarInteratividadeIngredientes();