// Mensagem no console
console.log("Site sobre música carregado!");

// Animação simples ao enviar o formulário
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
