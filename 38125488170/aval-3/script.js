// ======== EXIBE MENSAGEM AO CLICAR NO BOTÃO ========
function mostrarMensagem() {
    alert("Você clicou no botão!");
}

// ======== ALTERA ENTRE TEMA CLARO E ESCURO ========
function alternarTema() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        console.log("Tema escuro ativado");
    } else {
        console.log("Tema claro ativado");
    }
}

// ======== MOSTRAR DATA E HORA ATUAL NA TELA ========
function atualizarDataHora() {
    const elemento = document.getElementById("dataHora");
    const agora = new Date();

    const formato = agora.toLocaleString("pt-BR", {
        dateStyle: "full",
        timeStyle: "medium"
    });

    elemento.textContent = formato;
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);

// ======== EVENTO PARA ALTERAR O TEMA QUANDO A TECLA "T" FOR PRESSIONADA ========
document.addEventListener("keydown", (event) => {
    if (event.key === "t" || event.key === "T") {
        alternarTema();
    }
});
