// Função para adicionar interatividade simples
document.addEventListener("DOMContentLoaded", function() {
    const noticias = document.querySelectorAll(".noticia");

    noticias.forEach(noticia => {
        noticia.addEventListener("click", () => {
            noticia.style.backgroundColor = "#f1f1f1";
            noticia.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });
    });
});
