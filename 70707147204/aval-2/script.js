document.getElementById("btnAdicionar").onclick = function () {
        let tarefa = document.getElementById("tarefaInput").value;

            if (tarefa.trim() === "") return;

                let li = document.createElement("li");
                    li.innerHTML = `${tarefa} <button onclick="remover(this)">X</button>`;

                        document.getElementById("lista").appendChild(li);

                            document.getElementById("tarefaInput").value = "";
                            };

                            function remover(botao) {
                                botao.parentElement.remove();
                                }
}