const noticias = [
    "Cientistas descobrem uma nova espécie de planta que brilha no escuro.",
    "Cidade do interior bate recorde de turistas em 2025.",
    "Robô doméstico salva família após detecção de incêndio.",
    "Nova tecnologia promete carregar celulares em apenas 10 segundos.",
    "Astrônomos detectam possível exoplaneta parecido com a Terra.",
    "Pesquisa revela que ler 15 minutos por dia aumenta o bem-estar.",
    "Startup cria geladeira que repõe alimentos automaticamente."
];

document.getElementById("btn-gerar").addEventListener("click", function () {
    const indice = Math.floor(Math.random() * noticias.length);
    document.getElementById("noticia-texto").textContent = noticias[indice];
});
