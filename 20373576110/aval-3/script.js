// Trocar imagem
const imagens = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80"
];

const imgPraia = document.getElementById("praia-img");
const btnTrocar = document.getElementById("trocar-btn");

btnTrocar.addEventListener("click", () => {
    const indexAtual = imagens.indexOf(imgPraia.src);
    const proximoIndex = (indexAtual + 1) % imagens.length;
    imgPraia.src = imagens[proximoIndex];
});

// Botão Curtir
const btnCurtir = document.getElementById("curtir-btn");
let contador = 0;

btnCurtir.addEventListener("click", () => {
    contador++;
    btnCurtir.textContent = `Curtir (${contador})`;
});
