console.log("Site do CETI Joel Ribeiro carregado!");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
});
