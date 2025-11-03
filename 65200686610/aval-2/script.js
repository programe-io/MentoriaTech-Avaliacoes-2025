// 1. Selecionar os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// 2. Função para criar um novo item da lista
function createNewTask(taskText) {
    // Cria o elemento <li>
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Adiciona o evento de clique para marcar como concluída
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Cria o botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');
    
    // Adiciona o evento de clique para remover a tarefa
    deleteButton.addEventListener('click', (event) => {
        // Impede que o clique no botão ative o evento do <li> (marcar como concluída)
        event.stopPropagation(); 
        listItem.remove(); // Remove o <li> da lista
    });

    // Adiciona o botão de exclusão ao <li>
    listItem.appendChild(deleteButton);

    // Adiciona o <li> à lista principal (<ul>)
    taskList.appendChild(listItem);
}

// 3. Função principal para adicionar a tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // Pega o texto e remove espaços em branco

    // Verifica se o input não está vazio
    if (taskText !== "") {
        createNewTask(taskText);
        taskInput.value = ""; // Limpa o input
        taskInput.focus(); // Coloca o foco de volta no input
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// 4. Adicionar listeners de eventos

// Evento de clique no botão "Adicionar"
addTaskButton.addEventListener('click', addTask);

// Evento de pressionar a tecla "Enter" no campo de input
taskInput.addEventListener('keypress', (e) => {
    // O código 13 é o código da tecla Enter
    if (e.key === 'Enter') { 
        addTask();
    }
});

// Opcional: Adicionar uma tarefa de exemplo ao carregar
createNewTask("Aprender HTML, CSS e JS 📚");
createNewTask("Fazer o deploy do projeto 🌐");