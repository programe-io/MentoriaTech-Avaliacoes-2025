// Exibe mensagem no console
console.log("Olá Maria Luiza! O site carregou corretamente!");

// Deixa os links do menu piscarem levemente quando clicados
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.backgroundColor = "orange";
        setTimeout(() => {
            link.style.backgroundColor = "";
        }, 300);
    });
});
