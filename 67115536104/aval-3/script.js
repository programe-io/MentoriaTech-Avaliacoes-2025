// Exemplo de interação simples
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");

    // Exemplo: mudar a cor do header quando clicado
    const header = document.querySelector("header");
    header.addEventListener("click", () => {
        header.style.backgroundColor = 
            header.style.backgroundColor === "black" ? "#3b7ddd" : "black";
    });

    // Exemplo: mensagem quando enviar formulário
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Formulário enviado!");
        });
    }
});