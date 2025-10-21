// Mensagem no console
console.log("Script carregado com sucesso!");

// Exemplo de interação simples
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("header h1");

    titulo.addEventListener("click", () => {
        alert("Você clicou no título do site! 😎");
    });
});
console.log("Página carregada com sucesso!");
