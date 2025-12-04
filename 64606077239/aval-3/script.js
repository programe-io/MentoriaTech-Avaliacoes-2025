// Mensagem no console
console.log("Site carregado com sucesso! Todas as tags inseridas.");

// Interação do botão — muda o texto
function mudarTexto() {
    const span = document.querySelector("span.mensagem");
    span.textContent = "Você clicou no botão!";
}

// Exemplo de evento quando a página carrega
window.addEventListener("load", () => {
    console.log("Página pronta.");
});
