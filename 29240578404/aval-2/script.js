    // Exibir alerta de boas-vindas
window.onload = function() {
    alert("Bem-vindo(a) ao meu site super top!");
};

// Mudar cor do header ao clicar
document.querySelector("header").addEventListener("click", function() {
    this.style.backgroundColor = 
        this.style.backgroundColor === "orange" ? "darkorange" : "orange";
});

// Mostrar mensagem ao clicar em um link do menu
let links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // evita recarregar a página
        alert("Você clicou em: " + this.textContent);
    });
});
