// SALVAR TAREFAS
document.getElementById("btnAddTarefa").addEventListener("click", function () {
    const input = document.getElementById("tarefaInput");
    const texto = input.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        document.getElementById("listaTarefas").appendChild(li);
        input.value = "";
    }
});

// SALVAR NOTAS
document.getElementById("btnSalvarNota").addEventListener("click", function () {
    const nota = document.getElementById("nota").value.trim();

    if (nota !== "") {
        const p = document.createElement("p");
        p.textContent = nota;

        document.getElementById("notasSalvas").appendChild(p);
        document.getElementById("nota").value = "";
    }
});
