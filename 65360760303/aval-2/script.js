// 1. Função principal para adicionar uma nova tarefa
function adicionarTarefa() {
    // Pega o valor do campo de input (o que o usuário digitou)
    const input = document.getElementById('novaTarefa');
    const textoTarefa = input.value.trim(); // .trim() remove espaços em branco extras

    // Verifica se o campo não está vazio
    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return; // Sai da função se estiver vazio
    }

    // Cria um novo elemento <li> (item da lista)
    const li = document.createElement('li');
    
    // Define o conteúdo do <li> (o texto da tarefa)
    li.textContent = textoTarefa;

    // Adiciona o evento de clique para marcar como concluída
    // Quando o <li> for clicado, ele alterna a classe 'concluida'
    li.addEventListener('click', function() {
        li.classList.toggle('concluida');
    });

    // Cria o botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.classList.add('remover-btn');

    // Adiciona o evento de clique para remover a tarefa
    btnRemover.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no botão ative o evento do <li>
        li.remove(); // Remove o <li> da lista
    });

    // Adiciona o botão de remover ao <li>
    li.appendChild(btnRemover);

    // Adiciona o novo <li> (tarefa) à lista principal <ul>
    document.getElementById('listaTarefas').appendChild(li);

    // Limpa o campo de input após adicionar
    input.value = '';
}