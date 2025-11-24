// Alternar tema claro/escuro
document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Contar palavras do artigo
document.getElementById("btnContar").addEventListener("click", () => {
    const texto = document.getElementById("artigo").innerText;
    const palavras = texto.trim().split(/\s+/).length;

    document.getElementById("resultado").innerText =
        "O artigo contém aproximadamente " + palavras + " palavras.";
});