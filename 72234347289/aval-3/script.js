// 🍁 1. GERAR NOTÍCIA COM SPAN
document.getElementById("btnNews").addEventListener("click", () => {

    const noticias = [
        "Flamengo ganha mais um título!",
        "Torcida do Mengão lota o Maracanã!",
        "Novo craque chega ao Flamengo!",
        "Gabigol marca gol decisivo!",
        "Arrascaeta dá show no meio-campo!"
    ];

    const indice = Math.floor(Math.random() * noticias.length);

    document.getElementById("newsBox").innerHTML =
        `<span>${noticias[indice]}</span>`;
});


// 🔥 2. DESTAQUE AUTOMÁTICO QUANDO CLICAR NO MENULATERAL
function destacar(id) {
    document.querySelector(`#${id} span`).classList.add("animacao");

    // Remove o destaque depois de 1 segundo
    setTimeout(() => {
        document.querySelector(`#${id} span`).classList.remove("animacao");
    }, 1000);
}


// 👥 3. CONTADOR DE TORCIDA DINÂMICO (SPAN ATUALIZANDO)
let contador = 0;

setInterval(() => {
    contador += Math.floor(Math.random() * 15) + 1;
    document.getElementById("contador").innerText = contador;
}, 1000);


// ✨ 4. ANIMAÇÃO NO TÍTULO PRINCIPAL COM SPAN
setInterval(() => {
    let titulo = document.getElementById("tituloMain");
    titulo.style.color = titulo.style.color === "red" ? "white" : "red";
}, 700);