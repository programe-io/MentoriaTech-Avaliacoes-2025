// Alerta de clique
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Você clicou em um botão!");
        });
    });
});

// Exemplo: Mensagem no console
console.log("JavaScript carregado com sucesso!");

// Mostrar mensagem ao abrir detalhes
const details = document.querySelector("details");
if (details) {
    details.addEventListener("toggle", () => {
        console.log("A seção de detalhes foi aberta/fechada.");
    });
}
