// 1. Seleção dos elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Adiciona ouvinte de evento (Listener) ao botão
addTaskBtn.addEventListener('click', addTask);

// 3. Adiciona ouvinte de evento para a tecla 'Enter' no input
taskInput.addEventListener('keypress', function(e) {
    // Verifica se a tecla pressionada é 'Enter' (código 13)
    if (e.key === 'Enter') {
        addTask();
    }
});

// FUNÇÃO PRINCIPAL: Adiciona uma nova tarefa à lista
function addTask() {
    const taskText = taskInput.value.trim(); // Pega o valor e remove espaços em branco

    // Validação: Não adiciona tarefas vazias
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // 4. Cria o novo elemento <li>
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Define o texto da tarefa

    // 5. Adiciona o botão de exclusão
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    
    // 6. Adiciona o ouvinte de evento para exclusão
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem); // Remove o <li> pai do botão
    });

    // 7. Adiciona o botão ao <li>
    listItem.appendChild(deleteBtn);

    // 8. Adiciona ouvinte de evento para marcar como concluída (riscar)
    listItem.addEventListener('click', function(e) {
        // Evita que o click no botão de exclusão marque como concluída
        if (e.target.classList.contains('delete-btn')) {
            return; 
        }
        listItem.classList.toggle('completed'); // Alterna a classe 'completed'
    });

    // 9. Adiciona o novo <li> à lista <ul>
    taskList.appendChild(listItem);

    // 10. Limpa o campo de input
    taskInput.value = '';
    taskInput.focus(); // Coloca o foco de volta no input
}

// Opcional: Adicionar uma tarefa inicial para demonstração (não é necessário, mas é útil)
// addTask("Aprender HTML/CSS/JS"); 
// addTask("Fazer o projeto To-Do List");