console.log("Script carregado com sucesso!");

// Mostrar botão ao rolar a página
window.addEventListener("scroll", () => {
    const btn = document.getElementById("topoBtn");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Função para voltar ao topo
function voltarTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}