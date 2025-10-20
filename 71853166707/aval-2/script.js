// Mensagem exibida no console quando a página é carregada
window.onload = function() {
    console.log("Bem-vindo ao Meu Blog de Jogos!");
};

// Seleciona todos os links do menu
const links = document.querySelectorAll("nav a");

// Adiciona um evento de clique em cada link do menu
links.forEach(link => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault(); // impede o recarregamento da página
        alert("Você clicou em: " + link.textContent);
    });
});
