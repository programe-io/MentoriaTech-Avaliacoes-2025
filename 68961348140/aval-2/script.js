const btn = document.getElementById("btnMax");
const artigo = document.getElementById("artigo");

btn.addEventListener("click", () => {
    artigo.classList.toggle("maximizado");

    if (artigo.classList.contains("maximizado")) {
        btn.textContent = "Restaurar";
    } else {
        btn.textContent = "Maximizar Artigo";
    }
});
