// Mensagem de boas-vindas ao carregar o site
window.onload = function () {
    alert("Bem-vindo ao meu site muito top!");
};

// Mudar a cor do cabeçalho
function mudarCorCabecalho() {
    const header = document.querySelector("header");
    header.style.backgroundColor = "#1e90ff"; // Azul Dodger Blue
}

// Mostrar/ocultar a galeria
function toggleGaleria() {
    const galeria = document.querySelector(".galeria");
    if (galeria.style.display === "none") {
        galeria.style.display = "block";
    } else {
        galeria.style.display = "none";
    }
}
