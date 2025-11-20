// Abre a imagem em nova aba ao clicar
document.querySelectorAll(".galeria img").forEach(img => {
    img.onclick = () => window.open(img.src, "_blank");
};