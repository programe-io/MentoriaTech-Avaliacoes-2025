// BOTÃO VOLTAR AO TOPO
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// NOTÍCIAS COM IMAGEM
const btnNoticia = document.getElementById("btnNoticia");
const noticiaTexto = document.getElementById("noticiaTexto");
const imgNoticia = document.getElementById("imgNoticia");

btnNoticia.addEventListener("click", () => {

    const noticias = [
        "Flamengo confirma novo reforço para temporada!",
        "Arrascaeta decide mais um jogo no Maracanã!",
        "Gabigol brilha e Mengão vence clássico!",
        "Flamengo revela uniforme especial de 2025!",
        "Torcida do Mengão quebra recorde de público!"
    ];

    const imagens = [
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Flamengo_team_in_2019.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/56/CR_Flamengo_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/De_Arrascaeta_2018.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Gabigol_2019.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_flag_new.svg"
    ];

    const index = Math.floor(Math.random() * noticias.length);

    noticiaTexto.textContent = noticias[index];
    imgNoticia.src = imagens[index];
});