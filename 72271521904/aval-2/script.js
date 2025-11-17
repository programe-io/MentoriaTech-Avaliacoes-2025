const noticias = [
    "Descoberto novo tipo de borboleta azul gigante.",
    "Tecnologia brasileira chama atenção em feira mundial.",
    "Inteligência artificial ajuda médicos a salvar vidas.",
    "Cidade surpreende ao zerar emissão de carbono.",
    "Arqueólogos encontram artefatos de 3 mil anos.",
    "Estudo mostra que música melhora a memória.",
    "Novo material ultraleve promete revolucionar construções."
];

document.getElementById("btn-gerar").addEventListener("click", () => {
    const indice = Math.floor(Math.random() * noticias.length);
    document.getElementById("texto-noticia").textContent = noticias[indice];
});
