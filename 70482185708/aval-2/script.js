// Função chamada pelo botão "Adicionar" no HTML
function addTask() {
    const taskInput = document.getElementById("taskInput");
        const taskList = document.getElementById("taskList");
            const taskText = taskInput.value.trim(); // Remove espaços em branco

                // Verifica se o campo de input não está vazio
                    if (taskText !== "") {
                            // Cria um novo item na lista (li)
                                    const li = document.createElement("li");
                                            li.innerHTML = `
                                                        <span>${taskText}</span>
                                                                    <button class="delete-btn">Excluir</button>
                                                                            `;

                                                                                    // Adiciona um evento de clique para marcar/desmarcar como concluída
                                                                                            li.addEventListener("click", function() {
                                                                                                        li.classList.toggle("completed"); // Alterna a classe CSS 'completed'
                                                                                                                });

                                                                                                                        // Adiciona um evento de clique para o botão de exclusão
                                                                                                                                li.querySelector(".delete-btn").addEventListener("click", function(e) {
                                                                                                                                            e.stopPropagation(); // Impede que o clique no botão ative o evento do item (li)
                                                                                                                                                        li.remove(); // Remove o item da lista
                                                                                                                                                                });

                                                                                                                                                                        // Adiciona o novo item à lista
                                                                                                                                                                                taskList.appendChild(li);
                                                                                                                                                                                        
                                                                                                                                                                                                // Limpa o campo de input após adicionar a tarefa
                                                                                                                                                                                                        taskInput.value = "";
                                                                                                                                                                                                            }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            