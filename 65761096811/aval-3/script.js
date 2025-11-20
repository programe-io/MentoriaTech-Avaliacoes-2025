// Confirmar carregamento
console.log("JS carregado: Blog Carros");

// Efeito básico nos links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Indo para:", link.getAttribute("href"));
    });
});