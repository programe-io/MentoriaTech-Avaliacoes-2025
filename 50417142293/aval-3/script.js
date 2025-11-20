console.log("JS carregado: Blog Gummy Bear");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navegando para:", link.getAttribute("href"));
    });
});