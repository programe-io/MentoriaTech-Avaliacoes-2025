// Função para mostrar os eventos quando o botão é clicado
document.getElementById("evento-btn").addEventListener("click", function() {
    var eventosList = document.getElementById("eventos-list");
    eventosList.classList.toggle("hidden");
});
