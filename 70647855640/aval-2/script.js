// Função chamada pelo botão "Adicionar" no HTML
function addTask() {
    // 1. Obter o valor do campo de input
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // Verifica se o input não está vazio
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // 2. Criar os elementos da nova tarefa (<li>, texto, botões)
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    // 3. Adicionar o texto da tarefa
    listItem.textContent = taskText;

    // 4. Configurar o evento para marcar como concluída (toggle)
    listItem.onclick = function() {
        // Alterna a classe 'completed' (que aplica o 'line-through' no CSS)
        listItem.classList.toggle('completed');
    };

    // 5. Criar o botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    
    // Configurar o evento para remover a tarefa
    deleteButton.onclick = function(event) {
        // Impede que o clique no botão ative o evento de clique do <li> (toggle concluído)
        event.stopPropagation(); 
        taskList.removeChild(listItem);
    };

    // 6. Anexar o botão ao item da lista
    listItem.appendChild(deleteButton);
    
    // 7. Anexar o novo <li> à lista <ul> principal
    taskList.appendChild(listItem);

    // 8. Limpar o campo de input após adicionar
    input.value = "";
}

// Opcional: Adicionar tarefa pressionando Enter no campo de input
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});